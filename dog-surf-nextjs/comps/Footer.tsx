import styles from '../styles/Footer.module.css'
// import '../styles/Footer.module.css'
const Footer = () => {
    return (
        <footer>
           <div className={styles.footercontent}>
        <div className={styles.footerdistributed}>
        <div className={styles.footerleft}>
        <h3>Dog Surf</h3>
        <p>Providing short term accomodation for you dogs in Ireland</p>
    </div>
    <div className={styles.footermiddle}>
    <img alt="test" src="/images/sss.png"  />

    </div>
    <div className={styles.footerright}>
    <p className={styles.footercompanyabout}>
        <span>About the Site</span>
        This site main purpose is to provide aditional accomodation for Dogs when their owners are away, as commonly is hard to find someone to watch over your pets if you are away from your home for short amount of time
    </p>

</div>
  
</div>


    </div>
        </footer>
    )
};

export default Footer;