import Customizer from '../../components/Customizer/Customizer';

export default function Customize() {
  const product = {
    id: 1,
    name: "Premium T-Shirt",
    basePrice: 24.99,
    image: "/placeholder-tshirt.png" // Add this image to public folder
  };

  return (
    <div className="page-container">
      <Customizer product={product} />
    </div>
  );
}