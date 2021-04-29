import { useRouter } from 'next/router'
import Head from 'next/head'
import { Fragment, useEffect, useState } from 'react'
import BodyPage from '../index'

const Body = () => {

    return (
        <Fragment>
            <Head>
                <meta name='viewport' content="width=device-width, initial-scale=1" />
                <meta key="description" name="description" content="NepKeys is an online Newari typing practice site with Newari Keyboard available where you can practice Newari typing online, calculate and improve your typing speed and track your progress with the inbuilt analytics system." />
                <meta key="keywords" name="keywords" content="nepkeys, Newari typing, Newari typing practice, online typing, online Newari typing, type in Newari, type Newari, Newari type, typing tutor, Newari typeshala, improve Newari typing, fast Newari typing, improve typing spped, typing test, Newari typing for begineers, typing jobs, keyboard Newari, virtual keyboard, Newari keyboard, practice Newari typing, online, type in Newari, Newari online typing, type online Newari, type Newari, Newari type, Newari, typing speed, Newari typing speed, words per minuter, Newari typing jobs, typing freelancers" />
                <title>NepKeys - Newari Keyboard and Newari Typing Practice Online</title>
                <link rel="icon" href="/joy.ico" />
            </Head>
            <BodyPage lang="Newari" fonts={{ "text": "56px", "upperKey": "24px", "lowerKey": "28px" }} />
        </Fragment>
    );
}

export default Body;