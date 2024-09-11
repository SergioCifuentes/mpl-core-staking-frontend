import React, { FC, useEffect, useState } from "react";
import axios from 'axios';

interface Asset {
    id: string;
    name: string;
    imageUrl: string;
}

export const AssetList: FC = () => {
    const [assets, setAssets] = useState<Asset[]>([]);

    useEffect(() => {
        // Fetch assets from the backend
        axios.get('http://localhost:4000/assets')
            .then(response => setAssets(response.data))
            .catch(error => console.error('Error fetching assets:', error));
    }, []);

    return (
        <div>
            <h2>Asset List</h2>
            <ul>
                {assets.map(asset => (
                    <li key={asset.id}>
                        <img src={asset.imageUrl} alt={asset.name} />
                        <p>{asset.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};