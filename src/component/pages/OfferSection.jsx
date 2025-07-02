const OfferSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#687FE5] to-[#4b5cc4] text-white py-12 px-6 rounded-2xl max-w-6xl mx-auto my-10 glass-banner">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Special Summer Offer!</h2>
        <p className="text-lg mb-6">
          Get 30% off on all premium products. Use code <span className="font-semibold bg-white/20 px-2 rounded">SUMMER30</span> at checkout.
        </p>
        {/* <button className="bg-white text-[#687FE5] font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition">
          Shop Now
        </button> */}
      </div>
    </section>
  );
};

export default OfferSection;
