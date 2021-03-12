import React from 'react';
import './MyComponents.css';

import Tabs, { TabPane } from 'rc-tabs';
/*Code pour Vertical Bar https://www.freakyjolly.com/react-tabs-component-example-using-rc-tabs/#.YEuWTWhKhhE*/
const Etage = () => {
    function callback(msg) {
        console.log(msg);
      }

    return ( 
        <div className="Etage">
            <Tabs tabPosition="left" defaultActiveKey="0" onChange={callback} >
                <TabPane tab="Tout" key="0">
                    L'ensemble des patients ayant un pacemaker !
                </TabPane>
                <TabPane tab="Étage 1" key="1">
                    Les patients du premier étage ayant un pacemaker !
                </TabPane>
                <TabPane tab="Étage 2" key="2">
                    Les patients du deuxième étage ayant un pacemaker !
                </TabPane>
            </Tabs>
        </div>
    );
};

export default Etage;

