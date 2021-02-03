import React, {useState} from "react";
import Translation from "../../domain/Translation";
import dayjs from "dayjs";

export interface Props {
}

export const TranslationAdd: React.FunctionComponent<Props> = () => {
    const [note, setNote] = useState('');
    const [fr, setFr] = useState('');
    const [en, setEn] = useState('');

    const handleChangeFr = (event: React.SyntheticEvent<HTMLInputElement>) => {
        setFr((event.target as HTMLInputElement).value);
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
            id: '1'
        }
        console.log(data);
    }

    return (
        <div>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input className="input" type="text" placeholder='En' value={en} onChange={handleChangeEn}/>
                </div>
            </div>

            <div className="field">
                <label className="label">Username</label>
                <div className="control">
                    <input className="input" type="text" placeholder='Fr' value={fr} onChange={handleChangeFr}/>
                </div>
            </div>

            <div className="field">
                <label className="label">Message</label>
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
