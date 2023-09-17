const Contact = () => {
  return (
    <div>
      <h1>This is Contact Us Page</h1>
      <form>
        <input
          type="text"
          name="name"
          placeholder="name"
          className="border border-gray-950 rounded-lg p-2 m-3"
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          className="border border-gray-950 rounded-lg p-2 m-3"
        />
        <button className="border border-gray-950 rounded-lg p-2 m-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
