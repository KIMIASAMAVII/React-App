import "./form.css";

const ShowInfoForm = (props) => {
  const { provinceName, city, name, phone } = props;

  return (
    <div className="form">
      <div className="container">
      <h3>فرم اطلاعات</h3>
      <p>{provinceName}</p>
      <p>{city}</p>
      <p>{name}</p>
      <p>{phone}</p>
    </div>
    </div>
  );
};

export default ShowInfoForm;
