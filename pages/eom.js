import styles from '../styles/EOM.module.css'
import Head from 'next/head';

export const EOM =({employee})=>{
    console.log(employee);
 return(
    <>
     <Head>
        <title>Employee Of The Month</title>
        <meta
          name="description"
          content={`This month's employee of the month is ${employee.name}`}
        />

        <meta property="og:image" content={employee.image} />
        <meta property="og:title" content="Employee Of The Month" />
        <meta
          property="og:description"
          content={`This month's employee of the month is ${employee.name}`}
        />

        <meta property="twitter:image" content={employee.image} />
        <meta property="twitter:title" content="Employee Of The Month" />
        <meta
          property="twitter:description"
          content={`This month's employee of the month is ${employee.name}`}
        />
      </Head>
<div className='container'>
    <div className={styles.main} >
        <h1> Employee</h1>
    </div>
    <div className={styles.eom} >
        <h3>{employee.name}</h3>
        <h6>{employee.position} </h6>
        <img src={employee.image}/>
        <p>{employee.description} </p>
    </div>
</div>
</>
    
    );

};
export const getServerSideProps = async pageContext =>{
    const apiResponse = await fetch(
         ' https://my-json-server.typicode.com/sahilrawat001/News-app/employeeOfTheMonth'
        
    );
    const employee =await apiResponse.json();
    return{
        props:{
            employee
        }
    }
};
export default EOM;