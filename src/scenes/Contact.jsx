import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

const Contact = () => {
  const clearForm = (e) => {
    setTimeout(() => {
      Array.from(e.target.parentElement.children).map((input) => {
        return input.tagName.toLowerCase() === 'input' ||
          input.tagName.toLowerCase() === 'textarea'
          ? (input.value = '')
          : '';
      });
    }, 300);
  };

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    const isValid = await trigger();
    if (!isValid) {
      errors.preventDefault();
    }
  };

  return (
    <section
      id='contact'
      className='mx-auto flex w-4/6 flex-col space-y-4 py-48 md:w-5/6 md:space-y-16 md:py-[300px]'
    >
      {/* Headings */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial='hidden'
        whileInView='visible'
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className='mx-auto w-1/3 sm:w-1/2'
      >
        <h3 className='text-center font-playfair text-lg font-semibold xs:text-2xl sm:text-4xl'>
          <span className='text-blue-500'>Contact Me</span> To Get Started
        </h3>
      </motion.div>

      {/* Form & Image Section */}
      <div className='mx-auto mt-5 items-center md:flex md:justify-between'>
        <motion.div
          className='mt-10 flex basis-1/2 justify-center md:mt-0'
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <form
            action='https://formsubmit.co/69bc4149adad4b90080606a8b75b16d1'
            target='_blank'
            onSubmit={onSubmit}
            method='POST'
            className='max-w-[300px]'
          >
            <input
              type='text'
              className='w-full rounded-lg bg-blue-700 py-1 px-3 font-semibold outline-none placeholder:text-slate-300 hover:bg-blue-600 focus:bg-white focus:text-black focus:outline-none'
              placeholder='Name'
              {...register('name', {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className='mt-1 text-rose-600'>
                {errors.name.type === 'required' && 'This field is required!'}
                {errors.name.type === 'maxLength' &&
                  'Max length is 100 characters!'}
              </p>
            )}

            <input
              type='email'
              className='mt-2 w-full rounded-lg  bg-blue-700 py-1 px-3 font-semibold outline-none placeholder:text-slate-300 hover:bg-blue-600 focus:bg-white focus:text-black focus:outline-none'
              placeholder='Email'
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className='mt-1 text-rose-600'>
                {errors.email.type === 'required' && 'This field is required!'}
                {errors.email.type === 'pattern' && 'Invalid email address!'}
              </p>
            )}

            <textarea
              rows='4'
              cols='50'
              type='email'
              className='mt-2 w-full rounded-lg  bg-blue-700 py-1 px-3 font-semibold outline-none placeholder:text-slate-300 hover:bg-blue-600 focus:bg-white focus:text-black focus:outline-none'
              placeholder='Message'
              {...register('message', {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className='mt-1 text-rose-600'>
                {errors.message.type === 'required' &&
                  'This field is required!'}
                {errors.message.type === 'maxLength' &&
                  'Max length is 2000 characters!'}
              </p>
            )}

            <button
              onClick={clearForm}
              type='submit'
              className='float-right mt-2 rounded-lg bg-blue-700 px-8 py-2 text-sm hover:bg-blue-600'
            >
              Send
            </button>
          </form>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className='mt-10 max-w-[500px] basis-1/2 rounded-2xl md:mt-0'
        >
          <img
            src='../assets/contact-me.jpg'
            alt='contact'
            className='rounded-2xl'
          />
        </motion.div>
      </div>
    </section>
  );
};
export default Contact;
