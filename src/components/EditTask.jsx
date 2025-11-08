import '../style/home.css';
import { useState } from 'react';

const EditList = ({ task, onSave, onCancel }) => {
  
    const [editValue, setEditValue] = useState(task);

    return (
      <div className="edit-overlay" onClick={onCancel}>
        <div className="edit-modal" onClick={(e) => e.stopPropagation()}>
          <form
            id="edit-form"
            onSubmit={(e) => {
              e.preventDefault();
              onSave(editValue.trim());
            }}
          >
            New Value: &nbsp;
            <input type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)} className="edit-input" autoFocus />
            <div className="btn-row">
              <button type="button" onClick={onCancel} className="cancel-btn">
                Cancel
              </button>
              <button type="submit" className="save-btn">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

export default EditList;