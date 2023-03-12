const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/Sherlline-Josephin">
        <i className="fa-brands fa-github" aria-hidden="true" title="Sherl GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/sherlline-josephin-xavier/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Sherl LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/_.sherlline_jose._/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Sherl Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/SherllineJose">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Sherl Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
