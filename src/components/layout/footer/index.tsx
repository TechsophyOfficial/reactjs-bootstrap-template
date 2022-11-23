import { AppBar, IconButton, makeStyles, Tooltip, Typography } from '@material-ui/core';
import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@material-ui/icons';
import React from 'react';
import COLORS from '../../../theme/colors.json';
import './style.scss';
import COMMON from '../../../constants/common';
import SIZE from '../../../theme/font_size.json';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    footerHelpSection: {
        backgroundColor: COLORS.BG_GRAY,
        '& h4': {
            color: COLORS.BORDER_1,
            fontSize: SIZE[23],
        },
    },

    footerMenuBlock: {
        '& ul': {
            '& li a': {
                color: COLORS.TX_COLOR_2,
                textDecoration: 'none',
            },
        },
    },
    footerFundraiseBlock: {
        '& > div': {
            '& button': {
                backgroundColor: theme.palette.primary.main,
            },
            '& button:hover': {
                backgroundColor: theme.palette.primary.main,
                transform: 'scale(1.25)',
            },
        },
    },
    footerCopyright: {
        borderColor: COLORS.BG_COLOR1,
        '& p': {
            fontSize: SIZE[14],
            color: COLORS.TX_COLOR_5,
        },
        '& ul li a': {
            fontSize: SIZE[14],
            color: COLORS.TX_COLOR_4,
        },
    },
}));

const Footer = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleFooterClick = (item) => {
        switch (item) {
            case COMMON.COMPANY:
                return navigate('/company');
            case COMMON.TERMS_OF_USE:
                return navigate('/termsofuse');
            case COMMON.PRIVACY_POLICY:
                return navigate('/privacypolicy');
            case COMMON.COOKIE_POLICY:
                return navigate('/cookiepolicy');
        }
    }

    const footerItems = [COMMON.COMPANY, COMMON.TERMS_OF_USE, COMMON.PRIVACY_POLICY, COMMON.COOKIE_POLICY]
    const getMenus = () => {
        return (
            <div className={'footerMenuWrapper'} style={{ background: "#fff" }}>
                {footerItems.map((item) => (
                    <div key={item} className={classes.footerMenuBlock + ' footerMenuBlock'} onClick={() => handleFooterClick(item)}>
                        <Typography variant="caption" color="primary">
                            {t(item)}
                        </Typography>
                    </div>
                ))}

                <div className={classes.footerFundraiseBlock + ' footerFundraiseBlock'}>
                    <div>
                        <Tooltip title={'Instagram'}>
                            <IconButton>
                                <Instagram />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={'Facebook'}>
                            <IconButton>
                                <Facebook />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={'YouTube'}>
                            <IconButton>
                                <YouTube />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={'Twitter'}>
                            <IconButton>
                                <Twitter />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={'LinkedIn'}>
                            <IconButton>
                                <LinkedIn />
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <AppBar className="footer-header" position="relative" style={{ backgroundColor: COLORS.WHITE }}>
            <div>
                {getMenus()}
            </div>
        </AppBar>
    );
};

export default Footer;
