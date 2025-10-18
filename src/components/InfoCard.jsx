import Button from "./Button"

function InfoCard({ image, title, description, buttonProps, className }) {
    return (
        <div className={className}>
            {image && <img src={image} alt={title} />}
            {title && <h3>{title}</h3>}
            {description && <p>{description}</p>}
            {buttonProps && <Button {...buttonProps} />}
        </div>
    );
}
export default InfoCard;