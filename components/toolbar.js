import {useRouter} from 'next/router';
import styles from '../styles/Toolbar.module.css'
export const Toolbar =()=>{
    const router =useRouter();

    return(
        <div className={styles.main}>
            <div   onClick={()=>router.push('/') }>
                home
            </div>
            <div  onClick={()=>router.push('/feed/1') }>
                Feed
            </div>
            <div  onClick={()=>router.push('/eom') }>
                EOM
            </div>
            <div  onClick={()=> window.location.href="https://twitter.com/SahilRawat03" }>Twitter </div>
            <div  onClick={()=> window.location.href=" https://www.instagram.com/sahilrawat_001/" }>Instagram </div>
             
        </div>

    
    )
}
