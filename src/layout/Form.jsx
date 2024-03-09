import React, { useState } from 'react';

const Form = () => {
  const [platformName, setPlatformName] = useState('')
  const [platformDescription, setPlatformDescription] = useState('')
  const [platformCompany, setPlatformCompany] = useState('')
  const [link, setLink] = useState('')
  const [checkbox, setCheckbox] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ platformName, platformDescription, platformCompany, link, checkbox })
  };

  return (
    <form onSubmit={handleSubmit} className=" p-8 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="platformName" className="block font-bold mb-2">
          Platform Name:
        </label>
        <input type="text" name="platformName" value={platformName}
          onChange={(e) => setPlatformName(e.target.value)}
          className="appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="platformDescription" className="block font-bold mb-2">
          Platform Description:
        </label>
        <textarea name="platformDescription" value={platformDescription}
          onChange={(e) => setPlatformDescription(e.target.value)}
          className="appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="platformCompany" className="block  font-bold mb-2">
          Platform Company:
        </label>
        <input type="text" name="platformCompany" value={platformCompany}
          onChange={(e) => setPlatformCompany(e.target.value)}
          className="appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="link" className="block font-bold mb-2">
          Link:
        </label>
        <input type="text" name="link" value={link}
          onChange={(e) => setLink(e.target.value)}
          className="appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button type="submit" className="hover:bg-[#646cff] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Submit
      </button>
    </form>
  );
};

export default Form;