import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: "public_FDEs+uueXU/CCvgwgpMmWCGZJYg=",
  privateKey: "private_cggI0m2NY9p+YHXLcqUQBjxSYek=",
  urlEndpoint: "https://ik.imagekit.io/amirbencc",
});

const imageAuth = (req, res) => {
    const reponse = imagekit.getAuthenticationParameters();
    res.send(reponse);
};

export default imageAuth;