import React from 'react';
import styles from './ContApp.module.css';
import ProfileCard from './ProfileCard';

function ContApp() {
  return (
    <main className={styles.container}>
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4913dc27622920bb57bc6b83910965d0ec0251f3c41055dea4ca3bc31fb14094?placeholderIfAbsent=true&apiKey=f2344844959a479cb405e1fddc9b6906" 
        alt="ContApp Logo" 
        className={styles.logo}
      />
      <h1 className={styles.title}>ContApp</h1>
      <h2 className={styles.subtitle}>ContApp</h2>
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c9aa10163883a6f349e771a062a4917e19d87bad193752e96c9da90c2230767?placeholderIfAbsent=true&apiKey=f2344844959a479cb405e1fddc9b6906" 
        alt="" 
        className={styles.decorativeImage}
      />
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/98e5507f895a393ea460ffd2f9c1781b6d318308b9bb1f8f75e0f5e58bd86f0b?placeholderIfAbsent=true&apiKey=f2344844959a479cb405e1fddc9b6906" 
        alt="" 
        className={styles.decorativeImage}
      />
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfe39a7635a3685285d1072252c303ce814e242de595897e7ec6ebaa7ef58a2c?placeholderIfAbsent=true&apiKey=f2344844959a479cb405e1fddc9b6906" 
        alt="" 
        className={styles.decorativeImage}
      />
      <ProfileCard name="Amelie" />
      <p className={styles.editProfileText}>click to edit your profile</p>
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/80e6db8a3d3575e1cda3db1473ae16930b3daadea9e8615d86127eb843654803?placeholderIfAbsent=true&apiKey=f2344844959a479cb405e1fddc9b6906" 
        alt="" 
        className={styles.footerImage}
      />
    </main>
  );
}

export default ContApp;