import Head from "next/head";

const Loading = () => {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <Head>
        <title>Whatsapp</title>
        <link rel="icon" href="/whatsapp.ico" />
      </Head>
      <div>
        <img
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
          alt=""
          height={200}
          style={{ marginBottom: 10 }}
        />
        <h1>Loading...</h1>
      </div>
    </center>
  );
};

export default Loading;
