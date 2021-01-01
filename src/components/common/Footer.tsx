import { Button } from '@material-ui/core';
import { I18nContext } from 'next-i18next';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { useTranslation } from '../../i18n';
import palette, { device } from '../../styles/palette';

const SpaceBox = styled.div`
    width: 100%;
    height: 4.375rem;
`;

const FooterBlock = styled.div`
    width: 100%;
    height: 4.375rem;
    position: absolute;
    bottom: 0;
    background-color: ${palette.grey[1]};
    display: flex;
    justify-content: center;
    align-items: center;

    .title,
    .language {
        color: ${palette.grey[7]};
        font-size: 14px;
        font-weight: 400;
    }

    .language {
        margin-left: 2rem;
        font-weight: 700;

        .active {
            font-weight: 700;
            color: blue;
        }
    }

    @media ${device.mobile} {
        display: none;
    }

    @media ${device.laptop} {
        display: flex;
    }
`;

interface IProps {
    sample?: string;
}

const languageLocale = ['en', 'de'];

const Footer: React.FC<IProps> = () => {
    const { i18n } = useTranslation();
    const {
        i18n: { language },
    } = useContext(I18nContext);

    const onChangeLanguageHandler = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <>
            <SpaceBox />
            <FooterBlock>
                <div className="title">AGB • Datenschutz • Impressum</div>
                <div className="language">
                    Language :{' '}
                    {languageLocale.map(languageL => (
                        <Button
                            className={language == languageL ? 'active' : undefined}
                            onClick={() => onChangeLanguageHandler(languageL)}
                        >
                            {languageL.toUpperCase()}
                        </Button>
                    ))}
                </div>
            </FooterBlock>
        </>
    );
};

export default Footer;
