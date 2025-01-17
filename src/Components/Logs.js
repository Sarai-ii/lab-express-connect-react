import { useState, useEffect } from "react";
import Log from "./Log";
import axios from "axios";

const URL = process.env.REACT_APP_API_URL ;
console.log(`Here's the URL: ${URL}`)

export default function Logs() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        axios.get(`${URL}/logs`).then((response) => {
        setLogs(response.data)})
        .catch((e) => console.warn("URL Is not working.", e));
    }, []);

    return (
        <div className="Logs">
            <section>
                <table>
                    <thead>
                    <tr className="text-center m-10" >
                        <th>Mistakes</th>
                        <th>Take Me There</th>
                        <th>See This Log</th>
                    </tr>
                    </thead>
                    <tbody>
                    {logs.map((log, index) => {
                        return <Log key={index} log={log} index={index} />;
                    })}
                    </tbody>
                </table>
            </section>
            
        </div>
    )
}