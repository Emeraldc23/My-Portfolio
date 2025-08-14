import "./stylesComp/pageTitle.css";

const PageTitle = ({ title, idName }) => {
  return (
    <div id={idName} className="pageTitle">
      {title}
    </div>
  );
};

export default PageTitle;
