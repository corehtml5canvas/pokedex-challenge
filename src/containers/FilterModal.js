import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { filterBits } from '../filter';
import './FilterModal.css';

const FilterModal = ({visible, setFilterBits, hideModal}) => {
  const [typeBits, setTypeBits] = useState(0);
  const [weaknessBits, setWeaknessBits] = useState(0);

  const modalStyle = {
    visibility: visible ? 'visible' : 'hidden'
  }

  const [weaknessCheckboxes, setWeaknessCheckboxes] = useState({
    Normal: false, Fighting: false, Flying: false, Poison: false, Ground: false, Rock: false,
    Bug: false, Ghost: false, Steel: false, Fire: false, Water: false, Grass: false, Electric: false,
    Psychic: false, Ice: false, Dragon: false, Dark: false, Fairy: false,
  });

  const [typeCheckboxes, setTypeCheckboxes] = useState({
    Normal: false, Fighting: false, Flying: false, Poison: false, Ground: false, Rock: false,
    Bug: false, Ghost: false, Steel: false, Fire: false, Water: false, Grass: false, Electric: false,
    Psychic: false, Ice: false, Dragon: false, Dark: false, Fairy: false,
  });

  const checkboxDivStyle = {
    height: '25vh',
    overflow: 'scroll',
    scrollbars: 'always',
  };

  const updateWeaknessBits = e => {
    const checkbox = e.target; // Close over for setState callback

    setWeaknessCheckboxes(state => ({
      ...state,
      [checkbox.name]: checkbox.checked
    }));

    setWeaknessBits(bits => bits ^= filterBits[checkbox.name]) // Flip bit corresponding to checkbox
  };

  const updateTypeBits = e => {
    const checkbox = e.target; // Close over for setState callback

    setTypeCheckboxes(state => ({
      ...state,
      [checkbox.name]: checkbox.checked
    }));

    setTypeBits(bits => bits ^= filterBits[checkbox.name]) // Flip bit corresponding to checkbox
  };

  const done = () => {
    setFilterBits({ // Set filter bits in Pokedex
      typeBits,
      weaknessBits,
    });

    hideModal();
  }

  return (
    <div onClick={hideModal} className='Backdrop' style={modalStyle}>
      <div className='Modal' onClick={e => e.stopPropagation()}> {/* Don't hide Modal for clicks inside */}
        <div className='CheckboxContainer'>
          <div style={{...checkboxDivStyle, float: 'left', marginLeft: '20px'}}>
            <div><b>Type</b></div>
            <hr/>
            <div><label>Normal <input type='checkbox' name='Normal' checked={typeCheckboxes['Normal']} onChange={updateTypeBits}/></label></div>
            <div><label>Fighting <input type='checkbox' name='Fighting' checked={typeCheckboxes['Fighting']} onChange={updateTypeBits}/></label></div>
            <div><label>Flying <input type='checkbox' name='Flying' checked={typeCheckboxes['Flying']} onChange={updateTypeBits}/></label></div>
            <div><label>Poison <input type='checkbox' name='Poison' checked={typeCheckboxes['Poison']} onChange={updateTypeBits}/></label></div>
            <div><label>Ground <input type='checkbox' name='Ground' checked={typeCheckboxes['Ground']} onChange={updateTypeBits}/></label></div>
            <div><label>Rock <input type='checkbox' name='Rock' checked={typeCheckboxes['Rock']} onChange={updateTypeBits}/></label></div>
            <div><label>Bug <input type='checkbox' name='Bug' checked={typeCheckboxes['Bug']} onChange={updateTypeBits}/></label></div>
            <div><label>Ghost <input type='checkbox' name='Ghost' checked={typeCheckboxes['Ghost']} onChange={updateTypeBits}/></label></div>
            <div><label>Steel <input type='checkbox' name='Steel' checked={typeCheckboxes['Steel']} onChange={updateTypeBits}/></label></div>
            <div><label>Fire <input type='checkbox' name='Fire' checked={typeCheckboxes['Fire']} onChange={updateTypeBits}/></label></div>
            <div><label>Water <input type='checkbox' name='Water' checked={typeCheckboxes['Water']} onChange={updateTypeBits}/></label></div>
            <div><label>Grass <input type='checkbox' name='Grass' checked={typeCheckboxes['Grass']} onChange={updateTypeBits}/></label></div>
            <div><label>Electric <input type='checkbox' name='Electric' checked={typeCheckboxes['Electric']} onChange={updateTypeBits}/></label></div>
            <div><label>Psychic <input type='checkbox' name='Psychic' checked={typeCheckboxes['Psychic']} onChange={updateTypeBits}/></label></div>
            <div><label>Ice <input type='checkbox' name='Ice' checked={typeCheckboxes['Ice']} onChange={updateTypeBits}/></label></div>
            <div><label>Dragon <input type='checkbox' name='Dragon' checked={typeCheckboxes['Dragon']} onChange={updateTypeBits}/></label></div>
            <div><label>Dark <input type='checkbox' name='Dark' checked={typeCheckboxes['Dark']} onChange={updateTypeBits}/></label></div>
            <div><label>Fairy <input type='checkbox' name='Fairy' checked={typeCheckboxes['Fairy']} onChange={updateTypeBits}/></label></div>
          </div>

          <div style={checkboxDivStyle}>
            <b>Weakness</b>
            <hr/>
            <div><label>Normal <input type='checkbox' name='Normal' checked={weaknessCheckboxes['Normal']} onChange={updateWeaknessBits}/></label></div>
            <div><label>Fighting <input type='checkbox' name='Fighting' checked={weaknessCheckboxes['Fighting']} onChange={updateWeaknessBits}/></label></div>
            <div><label>Flying <input type='checkbox' name='Flying' checked={weaknessCheckboxes['Flying']} onChange={updateWeaknessBits}/></label></div>
            <div><label>Poison <input type='checkbox' name='Poison' checked={weaknessCheckboxes['Poison']} onChange={updateWeaknessBits}/></label></div>
            <div><label>Ground <input type='checkbox' name='Ground' checked={weaknessCheckboxes['Ground']} onChange={updateWeaknessBits}/></label></div>
            <div><label>Rock <input type='checkbox' name='Rock' checked={weaknessCheckboxes['Rock']} onChange={updateWeaknessBits}/></label></div>
            <div><label>Bug <input type='checkbox' name='Bug' checked={weaknessCheckboxes['Bug']} onChange={updateWeaknessBits}/></label></div>
            <div><label>Ghost <input type='checkbox' name='Ghost' checked={weaknessCheckboxes['Ghost']} onChange={updateWeaknessBits}/></label></div>
            <div><label>Steel <input type='checkbox' name='Steel' checked={weaknessCheckboxes['Steel']} onChange={updateWeaknessBits}/></label></div>
            <div><label>Fire <input type='checkbox' name='Fire' checked={weaknessCheckboxes['Fire']} onChange={updateWeaknessBits}/></label></div>
            <div><label>Water <input type='checkbox' name='Water' checked={weaknessCheckboxes['Water']} onChange={updateWeaknessBits}/></label></div>
            <div><label>Grass <input type='checkbox' name='Grass' checked={weaknessCheckboxes['Grass']} onChange={updateWeaknessBits}/></label></div>
            <div><label>Electric <input type='checkbox' name='Electric' checked={weaknessCheckboxes['Electric']} onChange={updateWeaknessBits}/></label></div>
            <div><label>Psychic <input type='checkbox' name='Psychic' checked={weaknessCheckboxes['Psychic']} onChange={updateWeaknessBits}/></label></div>
            <div><label>Ice <input type='checkbox' name='Ice' checked={weaknessCheckboxes['Ice']} onChange={updateWeaknessBits}/></label></div>
            <div><label>Dragon <input type='checkbox' name='Dragon' checked={weaknessCheckboxes['Dragon']} onChange={updateWeaknessBits}/></label></div>
            <div><label>Dark <input type='checkbox' name='Dark' checked={weaknessCheckboxes['Dark']} onChange={updateWeaknessBits}/></label></div>
            <div><label>Fairy <input type='checkbox' name='Fairy' checked={weaknessCheckboxes['Fairy']} onChange={updateWeaknessBits}/></label></div>
          </div>
        </div>

        <button
          onClick={done}
          className='CloseButton'
        >
          Filter
        </button>
      </div>
    </div>
  );
}

FilterModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  setFilterBits: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,  
};

export default FilterModal;