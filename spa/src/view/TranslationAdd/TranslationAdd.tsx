import React, {useState} from "react";
import Translation from "../../domain/Translation";
import dayjs from "dayjs";
import { v4 as uuid } from "uuid";

export interface Props {
}

export const TranslationAdd: React.FunctionComponent<Props> = () => {
    const [note, setNote] = useState<string>('');
    const [fr, setFr] = useState<string>('');
    const [en, setEn] = useState<string>('');
    const [enError, setEnError] = useState<boolean>(false);
    const [frError, setFrError] = useState<boolean>(false);

    const handleChangeFr = (event: React.SyntheticEvent<HTMLInputElement>): void => {
        const value = (event.target as HTMLInputElement).value

        setFr(value);

        if (value) {
            return setFrError(false)
        }

        setFrError(true)
    }

    const handleChangeEn = (event: React.SyntheticEvent<HTMLInputElement>) => {
        setEn((event.target as HTMLInputElement).value);
    }

    const handleChangeNote = (event: React.SyntheticEvent<HTMLTextAreaElement>) => {
        setNote((event.target as HTMLTextAreaElement).value);
    }

    // TODO localStorage + Check Fields
    const submit = () => {
        let data: Translation = {
            note,
            fr,
            en,
            creation_date: dayjs(),
            id: uuid()
        }
        
        const translations = JSON.parse(localStorage.getItem('translations') || "[]")
        const updatedTranslations = [...translations, data]

        localStorage.setItem('translations', JSON.stringify(updatedTranslations))
    }

    return (
        <div>
            <div className="field">
                <label className="label">Anglais *</label>
                <div className="control">
                    <input className="input" type="text" placeholder='En' value={en} onChange={handleChangeEn}/>
                </div>
            </div>

            <div className="field">
                <label className="label">Français *</label>
                <div className="control">
                    <input className="input" type="text" placeholder='Fr' value={fr} onChange={handleChangeFr}/>
                </div>
                {frError && (
                    <p className="help is-danger">Ce champ doit être rempli</p>
                )}
            </div>

            <div className="field">
                <label className="label">Note</label>
                <div className="control">
                    <textarea className="textarea" placeholder='Note' value={note} onChange={handleChangeNote}/>
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link" disabled={!en || !fr} onClick={submit}>Add</button>
                </div>
            </div>
        </div>
    );
};
