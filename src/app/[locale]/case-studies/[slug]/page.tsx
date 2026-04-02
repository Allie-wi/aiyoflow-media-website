import React from 'react';

const CaseStudyPage = ({locale, slug}) => {
    const content = {
        en: {
            challenge: 'Challenge',
            insight: 'Insight',
            strategy: 'Strategy',
            execution: 'Execution',
            result: 'Result',
        },
        es: {
            challenge: 'Desafío',
            insight: 'Perspectiva',
            strategy: 'Estrategia',
            execution: 'Ejecución',
            result: 'Resultado',
        }
    };

    return (
        <div>
            <h1>{content[locale].challenge}</h1>
            <p>Your challenge content here...</p>
            <h2>{content[locale].insight}</h2>
            <p>Your insight content here...</p>
            <h2>{content[locale].strategy}</h2>
            <p>Your strategy content here...</p>
            <h2>{content[locale].execution}</h2>
            <p>Your execution content here...</p>
            <h2>{content[locale].result}</h2>
            <p>Your result content here...</p>
        </div>
    );
};

export default CaseStudyPage;