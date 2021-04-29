import { useRouter } from 'next/router'
import Head from 'next/head'
import { Fragment, useEffect, useState } from 'react'
import BodyPage from '../index'

const Body = () => {

    return (
        <Fragment>
            <Head>
                <meta name='viewport' content="width=device-width, initial-scale=1" />
                <meta key="description" name="description" content="NepKeys is an online Hindi typing practice site with Hindi Keyboard available where you can practice Hindi typing online, calculate and improve your typing speed and track your progress with the inbuilt analytics system." />
                <meta key="keywords" name="keywords" content="nepkeys, Hindi typing, Hindi typing practice, online typing, online Hindi typing, type in Hindi, type Hindi, Hindi type, typing tutor, Hindi typeshala, improve Hindi typing, fast Hindi typing, improve typing spped, typing test, Hindi typing for begineers, typing jobs, keyboard Hindi, virtual keyboard, Hindi keyboard, practice Hindi typing, online, type in Hindi, Hindi online typing, type online Hindi, type Hindi, Hindi type, Hindi, typing speed, Hindi typing speed, words per minuter, Hindi typing jobs, typing freelancers" />
                <title>NepKeys - Hindi Keyboard and Hindi Typing Practice Online</title>
                <link rel="icon" href="/joy.ico" />
            </Head>
            <BodyPage lang="Hindi" fonts={{ "text": "40px", "upperKey": "19px", "lowerKey": "24px" }} />
        </Fragment>
    );
}

export default Body;