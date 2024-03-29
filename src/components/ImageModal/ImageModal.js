import "./ImageModal.css";
function ImageModal({ content, onClose, onDelete }) {
  return (
    <div className={`modal`}>
      <div className="modal__image-container">
        <button
          type="button"
          onClick={onClose}
          className="modal__close modal__white"
        >
          <img src="/images/Close.svg" alt="close modal" />
        </button>
        <img
          src={content.imageUrl}
          alt={content.name}
          className="modal__image"
        />
        <div className=" modal__picture-title">
          <div className="modal__picture-text">{content.name}</div>
          <button
            type="click"
            className="modal__picture-text modal__confirm-button modal__orange"
            onClick={onDelete}
          >
            Delete Item
          </button>
        </div>
        <div className="modal__picture-text modal__picture-small-text ">
          Weather: {content.weather}
        </div>
      </div>
    </div>
  );
}
export default ImageModal;
