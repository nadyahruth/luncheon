/* eslint-disable react/prop-types */
export default function ImageCard({ image, description }) {
  return (
    <>
      <li>
        <img src={image} />
        <p>{description}</p>
      </li>
    </>
  );
}
