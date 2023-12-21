import React, { useState } from 'react'

const styles = {
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
    },
    
};

export default function Header(props) {
    
    const [text, setText] = useState('');
    const [Paragraph, setParaCount] = useState(0);
    const [wordCount,setWordCount]=useState(0);

    const handelUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handelLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handelClear =()=>{
        let newText='';
        setText(newText);
        setWordCount(0);
        setParaCount(0);
    }

    const analyzeText = (event) => {
        const newText=event.target.value;
        const paragraphs = newText.split('\n');
       
        const words = newText.trim().split(/\s+/);
        const newWordCount = words.length;
        setText(event.target.value);


        if(newText===''){
            setWordCount(0);
            setParaCount(0);
        }
        else{
        setWordCount(newWordCount);
        setParaCount(paragraphs.length);
        }
      };

    return (
        <>
            <div className='container pb-2 bg-dark text-white'>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th>Words</th>
                            <th>Characters</th>
                            <th>Approx Read-Time</th>
                            <th>Paragraph</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td>{wordCount}</td>
                                <td>{text.length} </td>
                                <td>{0.008 * (text.length)} sec</td>
                                <td>{Paragraph}</td>
                            </tr>
                    </tbody>
                </table>
            </div>
            <div className='container my-4'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea placeholder='Enter your text ....' className="form-control" value={text} onChange={analyzeText} id="myBox" rows="8">

                    </textarea>
                </div>
                <button className="btn btn-outline-success mx-1" onClick={handelUpperCase}>Convert To UpperCase</button>
                <button className="btn btn-outline-dark  mx-1" onClick={handelLowerCase}>Convert To LowerCase</button>
                <button className="btn btn-outline-danger  mx-1" onClick={handelClear}>Clear Existing Text</button>
            </div>
            <div className='container my-4'>
                <h2>PREVIEW</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
