import React from 'react';
import content from '../../locales/pt.json';
import card1 from '../../assets/imgquemusa1.png';
import card2 from '../../assets/imgquemusa2.png';
import card3 from '../../assets/imgquemusa3.png';
import card4 from '../../assets/imgquemusa4.png';
import GridSection from '../GridSection';
import Typography from '../Typography/styles';
import CasesCard from '../CasesCard';
import {
  WhoUsesSectionArea,
  TitleArea,
  CardsArea,
  CardImage,
} from './styles';

function WhoUsesSection() {
  return (
    <GridSection>
      <WhoUsesSectionArea>
        <TitleArea>
          <Typography
            as="h2"
            type="display-02"
            weight="bold"
            spacing="-1.71px"
          >
            {content.whoUses.title}
          </Typography>
        </TitleArea>
        <CardsArea>
          <CasesCard
            title={content.whoUses.cards[0].title}
            description={content.whoUses.cards[0].description}
          >
            <CardImage src={card1} />
          </CasesCard>
          <CasesCard
            title={content.whoUses.cards[1].title}
            description={content.whoUses.cards[1].description}
          >
            <CardImage src={card2} />
          </CasesCard>
          <CasesCard
            title={content.whoUses.cards[2].title}
            description={content.whoUses.cards[2].description}
          >
            <CardImage src={card3} />
          </CasesCard>
          <CasesCard
            title={content.whoUses.cards[3].title}
            description={content.whoUses.cards[3].description}
          >
            <CardImage src={card4} />
          </CasesCard>
        </CardsArea>
      </WhoUsesSectionArea>
    </GridSection>
  );
}

export default WhoUsesSection;
