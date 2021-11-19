import React from "react";
import { Card, CardContent, CardHeader,Box,Grid, Container } from "@mui/material";

const Header = () => {

  return (
    
     
        <Container
          className="header"
        >
          <div>
            <Grid container className="cards">
              <Grid className="card-item">
                  <Card >
                      <CardHeader>
                      Traffic
                      </CardHeader>
                      <CardContent>
                      <Box
                        component="span"
                        fontSize=".875rem"                        
                        marginRight=".5rem"                        
                        alignItems="center"
                      >
                       
                        3.48%
                      </Box>
                      <Box component="span" whiteSpace="nowrap">
                        Since last month
                      </Box>
                      </CardContent>
                  </Card>
               
              </Grid>
              <Grid className="card-item">
                  <Card>
                      <CardHeader>
                      Materials
                      </CardHeader>
                      <CardContent>
                      <Box
                        component="span"
                        fontSize=".875rem"
                        marginRight=".5rem"
                        
                        alignItems="center"
                      >
                        3.48%
                      </Box>
                      <Box component="span" whiteSpace="nowrap">
                        Since last month
                      </Box>
                      </CardContent>
                  </Card>
               
              </Grid>
              <Grid className="card-item">
                  <Card>
                      <CardHeader>
                      Traffic
                      </CardHeader>
                      <CardContent>
                      <Box
                        component="span"
                        fontSize=".875rem"
                        marginRight=".5rem"
                        
                        alignItems="center"
                      >
                        
                        3.48%
                      </Box>
                      <Box component="span" whiteSpace="nowrap">
                        Since last month
                      </Box>
                      </CardContent>
                  </Card>
               
              </Grid>
              <Grid className="card-item">
                  <Card
                  backgroundColor="red"
                  >
                      <CardHeader>
                      Traffic
                      </CardHeader>
                      <CardContent>
                      <Box
                        component="span"
                        fontSize=".875rem"
                        
                        marginRight=".5rem"
                        
                        alignItems="center"
                      >
                      
                        3.48%
                      </Box>
                      <Box component="span" whiteSpace="nowrap">
                        Since last month
                      </Box>
                      </CardContent>
                  </Card>
               
              </Grid>
              
              
            </Grid>
          </div>
        </Container>
     
  
  );
};

export default Header;
