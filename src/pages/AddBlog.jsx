import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

//  AGGIUNGIAMO I CAMPI VUOTI AL FORM
const initialFormData = {
    title: "",
    Image: "",
    content: "",
    tags: "",
};

const AddBlog = () => {
    //STATE GESTIONE INFORMAZIONI RACCOLTE DAI CAMPI DEL FORM
    const [formData, setFormData] = useState(initialFormData);

    // FUNZIONE GESTIONE INFO CAMPI
    function handleFormData(e) {

        // GESTIONE VALUE A SECONDA DEL TIPO DI INPUT
        const value = e.target.type === "" ? e.target.checked : e.target.value;

        //SETTA TRAMITE SETSTATE L'OGGETTO CON LE INFO PRESI DAI CAMPI DEL FORM
        setFormData((currentFormData) => ({
            ...currentFormData,
            [e.target.name]: value,
        }));
    }

    //UTILIZZO NAVIGATE
    const navigate = useNavigate();

    //FUNZIONE GESTIONE INVIO DELL'INTERO FORM
    function handleSubmit(e) {
        e.preventDefault();
        // CHIAMATA VERSO API OCN INSERIMENTO NUOVO BLOG
        axios.post("http://localhost:3000/posts", formData)
            .then(res => {
                navigate("/Blogs");
            }
            )
            .catch(err => console.log(err))
        //RESETTO IL FORM
        setFormData(initialFormData);
    }


    return (
        <>
            <h1>Aggiungi il tuo blog</h1>

            <form action="#" onSubmit={handleSubmit}>
                {/* valore titolo blog */}
                <input
                    type="text"
                    name="title"
                    onChange={handleFormData}
                    value={formData.title}
                    placeholder='titolo del blog'
                />


                {/* valore immagine blog */}
                <input
                    type="text"
                    name="Image"
                    onChange={handleFormData}
                    value={formData.Image}
                    placeholder='immagine del blog'
                />

                {/* valore contenuto blog */}
                <textarea
                    type="text"
                    name="content"
                    onChange={handleFormData}
                    value={formData.content}
                    placeholder='contenuto del blog'
                />


                {/* valore tags blog */}
                <input
                    type="text"
                    name="tags"
                    onChange={handleFormData}
                    value={formData.tags}
                    placeholder='tags del blog'
                />

                <button>Aggiungi</button>


            </form >
        </>

    )
}

export default AddBlog