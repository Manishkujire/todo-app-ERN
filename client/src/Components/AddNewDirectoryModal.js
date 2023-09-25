import React from 'react'
import "../Styles/AddNewDirectoryModal.css"

export default function AddNewDitectoryModal(props) {
  return (
    <>
      <button type="button" className="btn border-dotted text-faded"  >


        New
      </button>
      <div className={`modal fade `} id="exampleModal1" tabIndex="-1" aria-hidden="true"
        data-bs-theme={``}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 " id="exampleModalLabel" style={{ marginLeft: "25%" }}>Create New Directory</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="col-form-label">Title</label>
                  <input type="text" className="form-control" id="title" />
                </div>

              </form>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Create</button>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}
