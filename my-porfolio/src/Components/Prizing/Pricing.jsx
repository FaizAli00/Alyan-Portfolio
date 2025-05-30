import React from 'react';

const PricingCard = ({ title, description, price, features, buttonText }) => {
  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:brightness-110">
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{description}</p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">{price}</span>
        <span className="text-gray-500 dark:text-gray-400">/month</span>
      </div>
      <ul role="list" className="mb-8 space-y-4 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
        {buttonText}
      </a>
    </div>
  );
};

const Pricing = () => {
  const pricingPlans = [
    {
      title: 'Starter',
      description: 'Best option for personal use & for your next project.',
      price: '$29',
      features: [
        'Individual configuration',
        'No setup, or hidden fees',
        'Team size: 1 developer',
        'Premium support: 6 months',
        'Free updates: 6 months',
      ],
      buttonText: 'Order Now',
    },
    {
      title: 'Company',
      description: 'Relevant for multiple users, extended & premium support.',
      price: '$99',
      features: [
        'Individual configuration',
        'No setup, or hidden fees',
        'Team size: 10 developers',
        'Premium support: 24 months',
        'Free updates: 24 months',
      ],
      buttonText: 'Order Now',
    },
    {
      title: 'Enterprise',
      description: 'Best for large scale uses and extended redistribution rights.',
      price: '$499',
      features: [
        'Individual configuration',
        'No setup, or hidden fees',
        'Team size: Unlimited developers',
        'Premium support: 36 months',
        'Free updates: 36 months',
      ],
      buttonText: 'Order Now',
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">

        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            My Awesome Pricing
          </p>
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          My Pricing
          </h2>
          <p className='mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400'>As a frontend specialist, I excel in building captivating user interfaces <br /> that not only look great but also provide seamless navigation.</p>
          
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;