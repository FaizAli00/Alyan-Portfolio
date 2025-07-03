import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const YOUR_EMAIL = 'aliyandatusing151006@gmail.com';

const CalendarModal = ({ plan, onClose, onSubmit }) => {
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await onSubmit({
        plan: plan.title,
        price: plan.price,
        date,
        client: { name, email },
        details,
        yourEmail: YOUR_EMAIL
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Schedule {plan.title} Plan
            </h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Project Details
                </label>
                <textarea
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Preferred Date
                </label>
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                  minDate={new Date()}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              <div className="bg-blue-50 dark:bg-gray-700 p-3 rounded-md">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  This booking will be sent to <strong>{YOUR_EMAIL}</strong>
                </p>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Confirm Booking'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const PricingCard = ({ plan, onBookNow }) => {
  return (
    <div className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
      
      <div className="my-4">
        <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span>
        <span className="text-gray-500 dark:text-gray-400 ml-1">/month</span>
      </div>
      
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button
        onClick={() => onBookNow(plan)}
        className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
      >
        Book Now
      </button>
    </div>
  );
};

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [notification, setNotification] = useState(null);

  const handleBookNow = (plan) => {
    setSelectedPlan(plan);
  };

  const handleCloseModal = () => {
    setSelectedPlan(null);
  };

  const handleSubmitBooking = async (bookingData) => {
    try {
      // In a real app, you would send this data to your backend/email service
      console.log('Booking submitted:', bookingData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setNotification({
        type: 'success',
        message: 'Booking request sent successfully! I will contact you soon.'
      });
    } catch (error) {
      setNotification({
        type: 'error',
        message: 'Failed to send booking request. Please try again.'
      });
    } finally {
      setSelectedPlan(null);
      setTimeout(() => setNotification(null), 5000);
    }
  };

  const pricingPlans = [
    {
      title: 'Basic',
      description: 'Perfect for small projects and single-page applications.',
      price: '$150',
      features: [
        'One Page Website Design',
        'Functional Website',
        'Source Files Included',
        '24/7 Support',
        '2 Revisions Included'
      ]
    },
    {
      title: 'Standard',
      description: 'Ideal for growing businesses with more complex needs.',
      price: '$270',
      features: [
        'Complete Website Design',
        'Functional Website',
        'Wireframing & Prototyping',
        'Source Files',
        'Responsive Design',
        'Custom Assets',
        '3 Revisions Included'
      ]
    },
    {
      title: 'Premium',
      description: 'Comprehensive solution for large-scale applications.',
      price: '$499',
      features: [
        'Website + WebApp Design',
        'Advanced Functionality',
        'Wireframing & Prototyping',
        'Custom Assets',
        'Responsive Design',
        'Priority Support',
        'Unlimited Revisions'
      ]
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-2">
            My Awesome Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Flexible Pricing Plans
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            As a UI/UX specialist, I create stunning interfaces with seamless user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard 
              key={index} 
              plan={plan} 
              onBookNow={handleBookNow} 
            />
          ))}
        </div>
      </div>

      {selectedPlan && (
        <CalendarModal
          plan={selectedPlan}
          onClose={handleCloseModal}
          onSubmit={handleSubmitBooking}
        />
      )}

      {notification && (
        <div className={`fixed bottom-4 right-4 px-6 py-3 rounded-md shadow-lg ${
          notification.type === 'success' 
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'
        }`}>
          {notification.message}
        </div>
      )}
    </section>
  );
};

export default Pricing;