import styles from "../../styles/feed.module.css";
import {useRouter } from 'next/router';
import {Toolbar} from '../../components/toolbar'
export const Feed =({pageNumber,articles }  )=>{
    const router =useRouter();

     return (
       <div className="container">
        <Toolbar/>
         <div className={styles.main} >
            {articles.map( (article,index)=>(
                <div key={index} className={styles.post}  > 
                <h1  onClick={()=> window.location.href=article.url } > {article.title}  </h1>
                <p> {article.description} </p>
                {!!article.urlToImage && <img src ={article.urlToImage} />}
                
                 </div>
            ) )  }
        </div>
        {/* button class */}
        <div className={styles.paginator}>
            {/* previous button */}
            < div 
           
            className={pageNumber===1 ? styles.disabled : styles.active }
                 onClick={ ()=>{
                if(pageNumber>1){
                    router.push(`/feed/${pageNumber-1} `);
                }
            }  }>
                       previous 
            </div>
            <div className={styles.pageno} >#{pageNumber} </div>

            {/* next button */}
            < div 
            onClick={ ()=>{
                if(pageNumber<5){
                    router.push(`/feed/${pageNumber+1} `)
                }
            }  }
            className={pageNumber===5 ?styles.disabled :styles.active }>
                        next 
            </div>
            
        </div>
       </div>
    );


};
export const getServerSideProps = async pageContext =>{
        const pageNumber =pageContext.query.id;
        if(!pageNumber|| pageNumber<1 || pageNumber>5){
            return {
                props :{
                    articles:[],
                    pageNumber:1,
                }
            }
        }
        const apiResponse =await fetch (
            `https://newsapi.org/v2/top-headlines?country=in&pageSize=8&page=${pageNumber}`,
            {
                headers:{
                    Authorization: `Bearer ${process.env.PUBLiC_KEY}`,

                },
            }
        );
      const apiJson=await apiResponse.json();
       const {articles}=apiJson; 
       return {
        props:{
            articles,
            pageNumber:Number.parseInt(pageNumber)

        }
       }

    }

    
export default Feed;