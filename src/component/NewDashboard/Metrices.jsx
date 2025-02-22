
import "bootstrap/dist/css/bootstrap.min.css";

const Counter = ({ endValue, duration }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(endValue / (duration / 10));
    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        start = endValue;
        clearInterval(timer);
      }
      setCurrentValue(start);
    }, 10);

    return () => clearInterval(timer);
  }, [endValue, duration]);

  return <span>{currentValue.toLocaleString()}</span>;
};

const MetricsComponent = () => {
  const metricsData = [
    { value: 321, label: "Uttar Pradesh" },
    { value: 129, label: "Uttarakhand" },
    { value: 921, label: "Andhra Pradesh" },
    { value: 321, label: "Arunachal Pradesh" },
    { value: 129, label: "Goa" },
    { value: 129, label: "Himachal Pradesh" },
    { value: 321, label: "Jharkhand" },
    { value: 129, label: "Bihar" },
    { value: 921, label: "Karnataka" },
    { value: 321, label: "Haryana" },
    { value: 129, label: "Madhya Pradesh" },
    { value: 921, label: "Maharashtra" },
  ];

  const statistics = [
    { value: 15045, label: "Total Books Sold" },
    { value: 12, label: "Countries with Book Sales" },
    { value: 12, label: "Communities Reached Worldwide" },
  ];

  return (
    <>
    <div
      style={{
        // backgroundColor: "#6A1A17",
        color: "#FFD8C1",
        fontFamily: "Arial, sans-serif",
        // padding: "2rem",
      }}
    >
      {/* Metrics Section */}
      <h3
        className="text-start"
        style={{
          marginBottom: "2rem",
          color: "#FD8C50",
          marginLeft: "1rem",
        }}
      >Metrics from around India</h3>
      <div
        className="d-flex flex-wrap justify-content-center align-item-center flex-direction-column"
        style={{
          backgroundImage: "url(./images/mapimge.png)",
          //  backgroundColor: "#6A1A17",
          width: "100%",
          height: "44vh",
          alignItems: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // filter: "invert(14%) sepia(70%) saturate(800%) hue-rotate(-10deg) brightness(90%) contrast(100%)",
          // filter: "hue-rotate(-50deg) saturate(2)",
          // filter: "invert(17%) sepia(95%) saturate(5480%) hue-rotate(-15deg) brightness(95%) contrast(110%)",
        }}
      >
        <div className="d-flex flex-wrap justify-content-center align-item-center">
          {metricsData.map((item, index) => (
            <div
              key={index}
              style={{
                margin: "0.5rem",
                padding: "0.5rem",
                textAlign: "center",
                borderRadius: "5px",
                minWidth: "120px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#00000054",
              }}
            >
              <h3
                style={{
                  margin: "0",
                  color: "#8C231F",
                  marginRight: "10px",
                }}
              >
                <Counter endValue={item.value} duration={2000} />
              </h3>
              <p
                style={{
                  margin: "0",
                  fontSize: "1rem",
                  color:"#8e3a0d",
                  fontWeight:"700"
                  // color: "#FF5953",
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
          <div>
            <button
              style={{
                backgroundColor: "#FD8C50",
                color: "#6A1A17",
                border: "none",
                padding: "0.5rem",
                borderRadius: "5px",
                height: "7.5vh",
                marginTop: "8px",
                cursor: "pointer",
              }}
            >View All</button>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="d-flex justify-content-center align-items-center mt-5 flex-wrap" style={{position:"relative",top:"-6rem",}} >
        {statistics.map((stat, index) => (
          <div
            key={index}
            style={{
              margin: "0.5rem",
              padding: "1.5rem",
              textAlign: "start",
              backgroundColor: "#FD8C50",
              color: "#6A1A17",
              borderRadius: "5px",
              flex: "1",
              maxWidth: "200px",
              height:"22vh"
            }}
          >
            <h2 style={{ margin: "0", fontWeight: "bold" }}>
              <Counter endValue={stat.value} duration={2000} />
            </h2>
            <p style={{ margin: "0", fontSize: "1rem",fontWeight:"700" }}>{stat.label}</p>
          </div>
        ))}
          <div style={{background:"red"}}></div>
      </div>

      {/* Footer Section */}
    </div>
      <div className="text-start p-4 bg-#6A1A17" style={{background:"#6A1A17"}}>
        {/* <h1 style={{ color: "#7A2521", fontSize: "6rem" }}>{translations.Metrices.}</h1>
        <h1 style={{ color: "#7A2521", fontSize: "10rem" }}>{translations.Metrices.}</h1> */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ fontSize: "0.9rem", color: "#FD8C50" }}>Copyright Â© 2025 Ghar Ghar Ramayan - All Rights Reserved.</p>
          <img src="./images/Group 4.png" alt="group logo" />
        </div>
      </div>
    </>
  );
};

export default MetricsComponent;

