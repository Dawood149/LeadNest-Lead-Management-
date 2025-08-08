import React from 'react'
import { Card, CardContent, Typography, Divider, Stack } from "@mui/material";


const BuyersPreference = () => {
  return (
    <>
    <div>
                <h1 className="text-2xl mb-3">Buyers Preferences</h1>
                <Card
                  sx={{
                    width: 400,
                    height: 350,
                    borderRadius: 2,
                    boxShadow: 3,
                    p: 2,
                  }}
                >
                  <CardContent>
                    <Divider sx={{ mb: 2 }} />

                    <Stack spacing={1}>
                      <Typography
                        component="div"
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="26px"
                          viewBox="0 -960 960 960"
                          width="26px"
                          fill="#000000"
                        >
                          <path d="M680-600h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160v-80h160v-560H480v56l-80-58v-78h520v720H680Zm-640 0v-400l280-200 280 200v400H360v-200h-80v200H40Zm80-80h80v-200h240v200h80v-280L320-622 120-480v280Zm560-360ZM440-200v-200H200v200-200h240v200Z" />
                        </svg>{" "}
                        <strong>Property Type:</strong>
                        Single Family Home
                      </Typography>
                      <Typography
                        component="div"
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="26px"
                          viewBox="0 -960 960 960"
                          width="26px"
                          fill="#000000"
                        >
                          <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                        </svg>
                        <strong>Location:</strong>
                        Philadelphia, PA
                      </Typography>
                      <Typography
                        component="div"
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="26px"
                          viewBox="0 -960 960 960"
                          width="26px"
                          fill="#000000"
                        >
                          <path d="M441-120v-86q-53-12-91.5-46T293-348l74-30q15 48 44.5 73t77.5 25q41 0 69.5-18.5T587-356q0-35-22-55.5T463-458q-86-27-118-64.5T313-614q0-65 42-101t86-41v-84h80v84q50 8 82.5 36.5T651-650l-74 32q-12-32-34-48t-60-16q-44 0-67 19.5T393-614q0 33 30 52t104 40q69 20 104.5 63.5T667-358q0 71-42 108t-104 46v84h-80Z" />
                        </svg>
                        <strong>Budget Range:</strong>
                        $150,000 - $121,000
                      </Typography>
                      <Typography
                        component="div"
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="26px"
                          viewBox="0 -960 960 960"
                          width="26px"
                          fill="#000000"
                        >
                          <path d="M80-200v-240q0-27 11-49t29-39v-112q0-50 35-85t85-35h160q23 0 43 8.5t37 23.5q17-15 37-23.5t43-8.5h160q50 0 85 35t35 85v112q18 17 29 39t11 49v240h-80v-80H160v80H80Zm440-360h240v-80q0-17-11.5-28.5T720-680H560q-17 0-28.5 11.5T520-640v80Zm-320 0h240v-80q0-17-11.5-28.5T400-680H240q-17 0-28.5 11.5T200-640v80Zm-40 200h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z" />
                        </svg>
                        <strong>Beds:</strong> 3
                      </Typography>
                      <Typography
                        component="div"
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="26px"
                          viewBox="0 -960 960 960"
                          width="26px"
                          fill="#000000"
                        >
                          <path d="M280-600q-33 0-56.5-23.5T200-680q0-33 23.5-56.5T280-760q33 0 56.5 23.5T360-680q0 33-23.5 56.5T280-600ZM200-80q-17 0-28.5-11.5T160-120q-33 0-56.5-23.5T80-200v-240h120v-30q0-38 26-64t64-26q20 0 37 8t31 22l56 62q8 8 15.5 15t16.5 13h274v-326q0-14-10-24t-24-10q-6 0-11.5 2.5T664-790l-50 50q5 17 2 33.5T604-676L494-788q14-9 30-11.5t32 3.5l50-50q16-16 36.5-25t43.5-9q48 0 81 33t33 81v326h80v240q0 33-23.5 56.5T800-120q0 17-11.5 28.5T760-80H200Zm-40-120h640v-160H160v160Zm0 0h640-640Z" />
                        </svg>
                        <strong>Baths:</strong> 2
                      </Typography>
                      <Typography
                        component="div"
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="26px"
                          viewBox="0 -960 960 960"
                          width="26px"
                          fill="#000000"
                        >
                          <path d="M120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z" />
                        </svg>
                        <strong>Sqft:</strong> 2100
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </div>
    </>
  )
}

export default BuyersPreference