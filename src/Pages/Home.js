import React, { Component, useState } from 'react';
import CarouselBoxHk from "../CarouselBoxHk";
import { Button, Card, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Select from 'react-select';
import { useTranslation, Trans } from 'react-i18next';

export default function Home() {
    const languageOptions = [
        { value: 'ua', label: 'Українська' },
        { value: 'en', label: 'English' }
    ];
    const { t, i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);


    const handleLanguageChange = (selectedLanguage) => {
        setSelectedLanguage(selectedLanguage);
        i18n.changeLanguage(selectedLanguage.value);
    };

    return (
        <>
            <CarouselBoxHk />
            <div>
                <Select
                    options={languageOptions}
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                />
            </div>
            <Container>
                <h2 className="text-center m-4">{t('team.text')}</h2>
                <div className="row">
                    <div className="col">
                        <Card className="m-4 text-center" bg="light" border="primary">
                            <Card.Img
                                variant="top"
                                src="https://cdn.geekwire.com/wp-content/uploads/2015/09/FIFA-16-Brazil-Team-600x300.jpg"
                            />
                            <Card.Body>
                                <Card.Title>{t('team1.title')}</Card.Title>
                                <Card.Text>
                                    {t('team1.desc')}
                                </Card.Text>
                                <Button variant="primary" href='/team1'>{t('team.button')}</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        <Card className="m-4 text-center" bg="light">
                            <Card.Img
                                variant="top"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHOG3xhVMR3mi6xZKkVIm9p53Ad6MxoVhMw&usqp=CAU"
                            />
                            <Card.Body>
                                <Card.Title>{t('team2.title')}</Card.Title>
                                <Card.Text>
                                    {t('team2.desc')}
                                </Card.Text>
                                <Button variant="primary" href='/team2'>{t('team.button')}</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col">
                        <Card className="m-4 text-center" bg="light">
                            <Card.Img
                                variant="top"
                                className=''
                                src="https://blog.qbsmsp.com/hs-fs/hubfs/lwteamsstrategies600x300gray.png?width=600&name=lwteamsstrategies600x300gray.png"
                            />
                            <Card.Body>
                                <Card.Title>{t('team3.title')}</Card.Title>
                                <Card.Text>
                                    {t('team3.desc')}
                                </Card.Text>
                                <Button variant="primary" href='/team3'>{t('team.button')}</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Container>
        </>

    );
}
