import styles from '../styles/Footer.module.css'
// import '../styles/Footer.module.css'
const Footer = () => {
    return (
        <footer>
           <div className={styles.footercontent}>
        <div className={styles.footerdistributed}>
        <div className={styles.footerleft}>
        <h3>Dog Surf</h3>
        <p>Because your dog ... something something something something</p>
    </div>



    <div className={styles.footerright}>
    <p className={styles.footercompanyabout}>
        <span>About the Site</span>
        DogSurf Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aspernatur, fugit quas ipsa dolore eius obcaecati excepturi iste repellat ipsam recusandae magnam. Inventore culpa dicta adipisci repellat? Ratione,
    </p>

</div>
  
</div>


    </div>
        </footer>
    )
};

export default Footer;