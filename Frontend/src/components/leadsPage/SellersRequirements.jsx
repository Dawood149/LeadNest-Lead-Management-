import React from 'react'
import { Card, CardContent, Typography, Divider, Stack } from "@mui/material";


const SellersRequirements = ({details}) => {
  return (
    <>
    <div>
                <h1 className="text-2xl mb-3">Sellers Requirements</h1>

                <Card
                  sx={{
                    minWidth: 300,
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
                          <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                        </svg>
                        <strong>Address:</strong> {details.address}
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
                          <path d="M680-600h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160v-80h160v-560H480v56l-80-58v-78h520v720H680Zm-640 0v-400l280-200 280 200v400H360v-200h-80v200H40Zm80-80h80v-200h240v200h80v-280L320-622 120-480v280Zm560-360ZM440-200v-200H200v200-200h240v200Z" />
                        </svg>
                        <strong>Property Type:</strong> {details.propertyType}
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
                        <strong>Location:</strong> {details.location}
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
                        <strong>Asking Price:</strong> {details.askingPrice}
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
                        <strong>Beds:</strong> {details.beds}
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
                        <strong>Baths:</strong> {details.baths}
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
                        <strong>Sqft:</strong> {details.sqft}
                      </Typography>
                      <Typography
                        component="div"
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="#000000"
                        >
                          <path d="M760-400v-260L560-800 360-660v60h-80v-100l280-200 280 200v300h-80ZM560-800Zm20 160h40v-40h-40v40Zm-80 0h40v-40h-40v40Zm80 80h40v-40h-40v40Zm-80 0h40v-40h-40v40ZM280-220l278 76 238-74q-5-9-14.5-15.5T760-240H558q-27 0-43-2t-33-8l-93-31 22-78 81 27q17 5 40 8t68 4q0-11-6.5-21T578-354l-234-86h-64v220ZM40-80v-440h304q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87v40L560-60l-280-78v58H40Zm80-80h80v-280h-80v280Z" />
                        </svg>
                        <strong>Mortage:</strong> {details.mortgage}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </div>
    </>
  )
}

export default SellersRequirements