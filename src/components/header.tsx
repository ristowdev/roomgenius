import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';

interface IHeaderProps{
}

export default function Header(props: IHeaderProps) {

    return (<>
        
        <div className='header'>
            <div className='container'>
                <div className='wrapper'>
                    <div className='inside-header'>
                        <div className='logo'>
                            <h1>RoomGenius</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </>)
}