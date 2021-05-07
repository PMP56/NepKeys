import { useRouter } from 'next/router'
import Head from 'next/head'
import { Fragment, useEffect, useState } from 'react'
import BodyPage from '../index'

const Body = () => {

    return (
        <Fragment>
            <Head>
                <meta name='viewport' content="width=device-width, initial-scale=1" />
                <meta key="description" name="description" content="NepKeys is an online English typing practice site with English Keyboard available where you can practice English typing online, calculate and improve your typing speed and track your progress with the inbuilt analytics system." />
                <meta key="keywords" name="keywords" content="nepkeys, English typing, English typing practice, online typing, online English typing, type in English, type English, English type, typing tutor, English typeshala, improve English typing, fast English typing, improve typing spped, typing test, English typing for begineers, typing jobs, keyboard English, virtual keyboard, English keyboard, practice English typing, online, type in English, English online typing, type online English, type English, English type, English, typing speed, English typing speed, words per minuter, English typing jobs, typing freelancers" />
                <title>NepKeys - English Keyboard and English Typing Practice Online</title>
                <link rel="icon" href="/joy.ico" />
            </Head>
            <BodyPage lang="English" fonts={{ "text": "24px", "upperKey": "10px", "lowerKey": "18px" }} />
        </Fragment>
    );
}

export default Body;