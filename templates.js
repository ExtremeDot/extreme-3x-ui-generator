const xrayTemplates = [
	// 1 -------------------------------------------------------------------
	{
		id: "tls_xhttp_direct",
		name: "1. VLESS xHTTP Direct",
		content: {
			"id": 1,
			"userId": 0,
			"up": 0,
			"down": 0,
			"total": 0,
			"remark": "01- tls xhttp direct",
			"enable": true,
			"expiryTime": 0,
			"trafficReset": "never",
			"lastTrafficResetTime": 0,
			"listen": "",
			"port": 4430,
			"protocol": "vless",
			"settings": {
				"clients": [
					{ "id": "{{UUID}}", "flow": "", "email": "user1@vless.com", "limitIp": 0, "totalGB": 0, "expiryTime": 0, "enable": true }
				],
				"decryption": "none",
				"encryption": "none"
			},
			"streamSettings": {
				"network": "xhttp",
				"xhttpSettings": {
					"path": "{{PATH_XHTTP}}",
					"host": "{{SUBDOMAIN_DIRECT}}",
					"mode": "auto",
					"xPaddingBytes": "100-1000",
					"xPaddingObfsMode": false,
					"xPaddingKey": "",
					"xPaddingHeader": "",
					"xPaddingPlacement": "",
					"xPaddingMethod": "",
					"sessionPlacement": "",
					"sessionKey": "",
					"seqPlacement": "",
					"seqKey": "",
					"uplinkDataPlacement": "",
					"uplinkDataKey": "",
					"scMaxEachPostBytes": "1000000",
					"noSSEHeader": false,
					"scMaxBufferedPosts": 30,
					"scStreamUpServerSecs": "20-80",
					"serverMaxHeaderBytes": 0,
					"uplinkHTTPMethod": "",
					"headers": {},
					"scMinPostsIntervalMs": "30",
					"uplinkChunkSize": 0,
					"noGRPCHeader": false,
					"enableXmux": false
				},
				"security": "tls",
				"tlsSettings": {
					"serverName": "{{SUBDOMAIN_DIRECT}}",
					"minVersion": "1.2",
					"maxVersion": "1.3",
					"cipherSuites": "",
					"rejectUnknownSni": false,
					"disableSystemRoot": false,
					"enableSessionResumption": false,
					"certificates": [
						{
							"certificateFile": "{{CERT_DIRECT}}",
							"keyFile": "{{KEY_DIRECT}}",
							"oneTimeLoading": false,
							"usage": "encipherment",
							"buildChain": false
						}
					],
					"alpn": [
						"h2"
					],
					"echServerKeys": "{{ECH_SERVER_KEYS}}",
					"settings": {
						"fingerprint": "chrome",
						"echConfigList": "{{ECH_CONFIG_LIST}}",
						"pinnedPeerCertSha256": []
					}
				}
			},
			"tag": "in-4430-tcp",
			"sniffing": {
				"enabled": false
			},
			"clientStats": [],
			"nodeId": null,
			"fallbackParent": null
		}
	},
	// 2 -------------------------------------------------------------------
	{
		id: "tls_tcp_direct",
		name: "2. VMess TCP Direct",
		content: {
			"id": 2,
			"userId": 0,
			"up": 0,
			"down": 0,
			"total": 0,
			"remark": "02- tls tcp direct",
			"enable": true,
			"expiryTime": 0,
			"trafficReset": "never",
			"lastTrafficResetTime": 0,
			"listen": "",
			"port": 4431,
			"protocol": "vmess",
			"settings": {
				"clients": [
					{ "id": "{{UUID}}", "security": "auto", "level": 0, "email": "user2@vmess.com", "limitIp": 0, "totalGB": 0, "expiryTime": 0, "enable": true }
				]
			},
			"streamSettings": {
				"network": "tcp",
				"tcpSettings": {
					"acceptProxyProtocol": false,
					"header": {
						"type": "none"
					}
				},
				"security": "tls",
				"tlsSettings": {
					"serverName": "{{SUBDOMAIN_DIRECT}}",
					"minVersion": "1.2",
					"maxVersion": "1.3",
					"cipherSuites": "",
					"rejectUnknownSni": false,
					"disableSystemRoot": false,
					"enableSessionResumption": false,
					"certificates": [
						{
							"certificateFile": "{{CERT_DIRECT}}",
							"keyFile": "{{KEY_DIRECT}}",
							"oneTimeLoading": false,
							"usage": "encipherment",
							"buildChain": false
						}
					],
					"alpn": [
						"http/1.1"
					],
					"echServerKeys": "{{ECH_SERVER_KEYS}}",
					"settings": {
						"fingerprint": "chrome",
						"echConfigList": "{{ECH_CONFIG_LIST}}",
						"pinnedPeerCertSha256": []
					}
				}
			},
			"tag": "in-4431-tcp",
			"sniffing": {
				"enabled": false
			},
			"clientStats": [],
			"nodeId": null,
			"fallbackParent": null
		}
	},
	// 3 -------------------------------------------------------------------
	{
		id: "tls_ws_direct",
		name: "3. VLESS WS Direct",
		content: {
			"id": 3,
			"userId": 0,
			"up": 0,
			"down": 0,
			"total": 0,
			"remark": "03-tls WS direct",
			"enable": true,
			"expiryTime": 0,
			"trafficReset": "never",
			"lastTrafficResetTime": 0,
			"listen": "",
			"port": 4432,
			"protocol": "vless",
			"settings": {
				"clients": [
					{ "id": "{{UUID}}", "flow": "", "email": "user3@vless.com", "limitIp": 0, "totalGB": 0, "expiryTime": 0, "enable": true }
				],
				"decryption": "none",
				"encryption": "none"
			},
			"streamSettings": {
				"network": "ws",
				"wsSettings": {
					"acceptProxyProtocol": false,
					"path": "{{PATH_WS}}",
					"host": "{{SUBDOMAIN_DIRECT}}",
					"headers": {},
					"heartbeatPeriod": 0
				},
				"security": "tls",
				"tlsSettings": {
					"serverName": "{{SUBDOMAIN_DIRECT}}",
					"minVersion": "1.2",
					"maxVersion": "1.3",
					"cipherSuites": "",
					"rejectUnknownSni": false,
					"disableSystemRoot": false,
					"enableSessionResumption": false,
					"certificates": [
						{
							"certificateFile": "{{CERT_DIRECT}}",
							"keyFile": "{{KEY_DIRECT}}",
							"oneTimeLoading": false,
							"usage": "encipherment",
							"buildChain": false
						}
					],
					"alpn": [
						"h2",
						"http/1.1"
					],
					"echServerKeys": "{{ECH_SERVER_KEYS}}",
					"settings": {
						"fingerprint": "chrome",
						"echConfigList": "{{ECH_CONFIG_LIST}}",
						"pinnedPeerCertSha256": []
					}
				}
			},
			"tag": "in-4432-tcp",
			"sniffing": {
				"enabled": false
			},
			"clientStats": [],
			"nodeId": null,
			"fallbackParent": null
		}
	},	
	// 4 -------------------------------------------------------------------
	{
		id: "tls_httpupgrade_direct",
		name: "4. VMess HTTPUpgrade Direct",
		content: {
			"id": 7,
			"userId": 0,
			"up": 0,
			"down": 0,
			"total": 0,
			"remark": "04-tls httpupgrade direct",
			"enable": true,
			"expiryTime": 0,
			"trafficReset": "never",
			"lastTrafficResetTime": 0,
			"listen": "",
			"port": 4433,
			"protocol": "vmess",
			"settings": {
				"clients": [
					{ "id": "{{UUID}}", "security": "auto", "level": 0, "email": "user4@vmess.com", "limitIp": 0, "totalGB": 0, "expiryTime": 0, "enable": true }
				]
			},
			"streamSettings": {
				"network": "httpupgrade",
				"httpupgradeSettings": {
					"acceptProxyProtocol": false,
					"path": "{{PATH_UPGRADE}}",
					"host": "{{SUBDOMAIN_DIRECT}}",
					"headers": {}
				},
				"security": "tls",
				"tlsSettings": {
					"serverName": "{{SUBDOMAIN_DIRECT}}",
					"minVersion": "1.2",
					"maxVersion": "1.3",
					"cipherSuites": "",
					"rejectUnknownSni": false,
					"disableSystemRoot": false,
					"enableSessionResumption": false,
					"certificates": [
						{
							"certificateFile": "{{CERT_DIRECT}}",
							"keyFile": "{{KEY_DIRECT}}",
							"oneTimeLoading": false,
							"usage": "encipherment",
							"buildChain": false
						}
					],
					"alpn": [
						"h2",
						"http/1.1"
					],
					"echServerKeys": "{{ECH_SERVER_KEYS}}",
					"settings": {
						"fingerprint": "chrome",
						"echConfigList": "{{ECH_CONFIG_LIST}}",
						"pinnedPeerCertSha256": []
					}
				}
			},
			"tag": "in-4433-tcp",
			"sniffing": {
				"enabled": false
			},
			"clientStats": [],
			"nodeId": null,
			"fallbackParent": null
		}
	},	
	// 5 -------------------------------------------------------------------
	{
		id: "tls_grpc_direct",
		name: "5. VMess gRPC Direct",
		content: {
			"id": 8,
			"userId": 0,
			"up": 0,
			"down": 0,
			"total": 0,
			"remark": "05- tls grpc direct",
			"enable": true,
			"expiryTime": 0,
			"trafficReset": "never",
			"lastTrafficResetTime": 0,
			"listen": "",
			"port": 4434,
			"protocol": "vmess",
			"settings": {
				"clients": [
					{ "id": "{{UUID}}", "security": "auto", "level": 0, "email": "user5@vmess.com", "limitIp": 0, "totalGB": 0, "expiryTime": 0, "enable": true }
				]
			},
			"streamSettings": {
				"network": "grpc",
				"grpcSettings": {
					"serviceName": "{{PATH_GRPC}}",
					"authority": "as45as2dAgjhd",
					"multiMode": false
				},
				"security": "tls",
				"tlsSettings": {
					"serverName": "{{SUBDOMAIN_DIRECT}}",
					"minVersion": "1.2",
					"maxVersion": "1.3",
					"cipherSuites": "",
					"rejectUnknownSni": false,
					"disableSystemRoot": false,
					"enableSessionResumption": false,
					"certificates": [
						{
							"certificateFile": "{{CERT_DIRECT}}",
							"keyFile": "{{KEY_DIRECT}}",
							"oneTimeLoading": false,
							"usage": "encipherment",
							"buildChain": false
						}
					],
					"alpn": [
						"h2"
					],
					"echServerKeys": "{{ECH_SERVER_KEYS}}",
					"settings": {
						"fingerprint": "chrome",
						"echConfigList": "{{ECH_CONFIG_LIST}}",
						"pinnedPeerCertSha256": []
					}
				}
			},
			"tag": "in-4434-tcp",
			"sniffing": {
				"enabled": true,
				"destOverride": [ "http", "tls", "quic", "fakedns" ]
			},
			"clientStats": [],
			"nodeId": null,
			"fallbackParent": null
		}
	},	
	// 6 -------------------------------------------------------------------
	{
		id: "http_httpupgrade_direct",
		name: "6. VMess HTTPUpgrade Plain (No TLS)",
		content: {
			"id": 9,
			"userId": 0,
			"up": 0,
			"down": 0,
			"total": 0,
			"remark": "06- http httpupgrade direct",
			"enable": true,
			"expiryTime": 0,
			"trafficReset": "never",
			"lastTrafficResetTime": 0,
			"listen": "",
			"port": 801,
			"protocol": "vmess",
			"settings": {
				"clients": [
					{ "id": "{{UUID}}", "security": "auto", "level": 0, "email": "user6@vmess.com", "limitIp": 0, "totalGB": 0, "expiryTime": 0, "enable": true }
				]
			},
			"streamSettings": {
				"network": "httpupgrade",
				"httpupgradeSettings": {
					"acceptProxyProtocol": false,
					"path": "{{PATH_UPGRADE}}",
					"host": "{{SUBDOMAIN_DIRECT}}",
					"headers": {}
				},
				"security": "none"
			},
			"tag": "in-801-tcp",
			"sniffing": {
				"enabled": true,
				"destOverride": [ "http", "tls", "quic", "fakedns" ]
			},
			"clientStats": [],
			"nodeId": null,
			"fallbackParent": null
		}
	},	
	// 7 -------------------------------------------------------------------
	{
		id: "http_ws_direct_vless",
		name: "7. VLESS WS Plain (No TLS)",
		content: {
			"id": 10,
			"userId": 0,
			"up": 0,
			"down": 0,
			"total": 0,
			"remark": "07-http WS direct vless",
			"enable": true,
			"expiryTime": 0,
			"trafficReset": "never",
			"lastTrafficResetTime": 0,
			"listen": "",
			"port": 802,
			"protocol": "vless",
			"settings": {
				"clients": [
					{ "id": "{{UUID}}", "flow": "", "email": "user7@vless.com", "limitIp": 0, "totalGB": 0, "expiryTime": 0, "enable": true }
				],
				"decryption": "none",
				"encryption": "none"
			},
			"streamSettings": {
				"network": "ws",
				"wsSettings": {
					"acceptProxyProtocol": false,
					"path": "{{PATH_WS}}",
					"host": "{{SUBDOMAIN_DIRECT}}",
					"headers": {},
					"heartbeatPeriod": 0
				},
				"security": "none",
				"externalProxy": []
			},
			"tag": "in-802-tcp",
			"sniffing": {
				"enabled": false
			},
			"clientStats": [],
			"nodeId": null,
			"fallbackParent": null
		}
	},	
	// 8 -------------------------------------------------------------------
	{
		id: "http_tcp_direct_vmess",
		name: "8. VMess TCP HTTP Obfuscation (No TLS)",
		content: {
			"id": 11,
			"userId": 0,
			"up": 0,
			"down": 0,
			"total": 0,
			"remark": "08- http tcp direct vmess",
			"enable": true,
			"expiryTime": 0,
			"trafficReset": "never",
			"lastTrafficResetTime": 0,
			"listen": "",
			"port": 803,
			"protocol": "vmess",
			"settings": {
				"clients": [
					{ "id": "{{UUID}}", "security": "auto", "level": 0, "email": "user8@vmess.com", "limitIp": 0, "totalGB": 0, "expiryTime": 0, "enable": true }
				]
			},
			"streamSettings": {
				"network": "tcp",
				"tcpSettings": {
					"acceptProxyProtocol": false,
					"header": {
						"type": "http",
						"request": {
							"version": "1.1",
							"method": "GET",
							"path": [ "{{PATH_WS}}" ],
							"headers": {}
						},
						"response": {
							"version": "1.1",
							"status": "200",
							"reason": "OK",
							"headers": {}
						}
					}
				},
				"security": "none"
			},
			"tag": "in-803-tcp",
			"sniffing": {
				"enabled": false
			},
			"clientStats": [],
			"nodeId": null,
			"fallbackParent": null
		}
	},	
	// 9 -------------------------------------------------------------------
	{
		id: "http_ws_direct_vmess",
		name: "9. VMess WS Plain (No TLS)",
		content: {
			"id": 12,
			"userId": 0,
			"up": 0,
			"down": 0,
			"total": 0,
			"remark": "09-http WS direct vmess",
			"enable": true,
			"expiryTime": 0,
			"trafficReset": "never",
			"lastTrafficResetTime": 0,
			"listen": "",
			"port": 804,
			"protocol": "vmess",
			"settings": {
				"clients": [
					{ "id": "{{UUID}}", "security": "auto", "level": 0, "email": "user9@vmess.com", "limitIp": 0, "totalGB": 0, "expiryTime": 0, "enable": true }
				]
			},
			"streamSettings": {
				"network": "ws",
				"wsSettings": {
					"acceptProxyProtocol": false,
					"path": "{{PATH_WS}}",
					"host": "{{SUBDOMAIN_DIRECT}}",
					"headers": {},
					"heartbeatPeriod": 0
				},
				"security": "none"
			},
			"tag": "in-804-tcp",
			"sniffing": {
				"enabled": false
			},
			"clientStats": [],
			"nodeId": null,
			"fallbackParent": null
		}
	},	
	// 10 -------------------------------------------------------------------
	{
		id: "tls_ws_cdn",
		name: "10. VMess WS CDN",
		content: {
			"id": 13,
			"userId": 0,
			"up": 0,
			"down": 0,
			"total": 0,
			"remark": "10- tls WS CDN",
			"enable": true,
			"expiryTime": 0,
			"trafficReset": "never",
			"lastTrafficResetTime": 0,
			"listen": "",
			"port": 8443,
			"protocol": "vmess",
			"settings": {
				"clients": [
					{ "id": "{{UUID}}", "security": "auto", "level": 0, "email": "user10@vmess.com", "limitIp": 0, "totalGB": 0, "expiryTime": 0, "enable": true }
				]
			},
			"streamSettings": {
				"network": "ws",
				"wsSettings": {
					"acceptProxyProtocol": false,
					"path": "{{PATH_WS}}",
					"host": "{{SUBDOMAIN_CDN}}",
					"headers": {},
					"heartbeatPeriod": 0
				},
				"security": "tls",
				"tlsSettings": {
					"serverName": "{{SUBDOMAIN_CDN}}",
					"minVersion": "1.2",
					"maxVersion": "1.3",
					"cipherSuites": "",
					"rejectUnknownSni": false,
					"disableSystemRoot": false,
					"enableSessionResumption": false,
					"certificates": [
						{
							"certificateFile": "{{CERT_CDN}}",
							"keyFile": "{{KEY_CDN}}",
							"oneTimeLoading": false,
							"usage": "encipherment",
							"buildChain": false
						}
					],
					"alpn": [
						"h2",
						"http/1.1"
					],
					"echServerKeys": "{{ECH_SERVER_KEYS}}",
					"settings": {
						"fingerprint": "chrome",
						"echConfigList": "{{ECH_CONFIG_LIST}}",
						"pinnedPeerCertSha256": []
					}
				},
				"externalProxy": [
					{
						"forceTls": "same",
						"dest": "{{WHITELIST_IP}}",
						"port": 8443,
						"remark": "",
						"sni": "",
						"alpn": []
					}
				]
			},
			"tag": "in-8443-tcp",
			"sniffing": {
				"enabled": true,
				"destOverride": [ "http", "tls", "quic", "fakedns" ]
			},
			"clientStats": [],
			"nodeId": null,
			"fallbackParent": null
		}
	},	
	// 11 -------------------------------------------------------------------
	{
		id: "tls_grpc_cdn_vmess",
		name: "11. VMess gRPC CDN",
		content: {
			"id": 14,
			"userId": 0,
			"up": 0,
			"down": 0,
			"total": 0,
			"remark": "11- tls grpc CDN vmess",
			"enable": true,
			"expiryTime": 0,
			"trafficReset": "never",
			"lastTrafficResetTime": 0,
			"listen": "",
			"port": 2053,
			"protocol": "vmess",
			"settings": {
				"clients": [
					{ "id": "{{UUID}}", "security": "auto", "level": 0, "email": "user11@vmess.com", "limitIp": 0, "totalGB": 0, "expiryTime": 0, "enable": true }
				]
			},
			"streamSettings": {
				"network": "grpc",
				"grpcSettings": {
					"serviceName": "{{PATH_GRPC}}",
					"authority": "{{SUBDOMAIN_CDN}}",
					"multiMode": true
				},
				"security": "tls",
				"tlsSettings": {
					"serverName": "{{SUBDOMAIN_CDN}}",
					"minVersion": "1.2",
					"maxVersion": "1.3",
					"cipherSuites": "",
					"rejectUnknownSni": false,
					"disableSystemRoot": false,
					"enableSessionResumption": false,
					"certificates": [
						{
							"certificateFile": "{{CERT_CDN}}",
							"keyFile": "{{KEY_CDN}}",
							"oneTimeLoading": false,
							"usage": "encipherment",
							"buildChain": false
						}
					],
					"alpn": [
						"h2"
					],
					"echServerKeys": "{{ECH_SERVER_KEYS}}",
					"settings": {
						"fingerprint": "chrome",
						"echConfigList": "{{ECH_CONFIG_LIST}}",
						"pinnedPeerCertSha256": []
					}
				},
				"externalProxy": [
					{
						"forceTls": "same",
						"dest": "{{WHITELIST_IP}}",
						"port": 2053,
						"remark": "",
						"sni": "",
						"alpn": []
					}
				]
			},
			"tag": "in-2053-tcp",
			"sniffing": {
				"enabled": true,
				"destOverride": [ "http", "tls", "quic", "fakedns" ]
			},
			"clientStats": [],
			"nodeId": null,
			"fallbackParent": null
		}
	},	
	// 12 -------------------------------------------------------------------
	{
		id: "tls_xhttp_cdn_vless",
		name: "12. VLESS xHTTP CDN",
		content: {
			"id": 16,
			"userId": 0,
			"up": 0,
			"down": 0,
			"total": 0,
			"remark": "12- tls xhttp CDN vless",
			"enable": true,
			"expiryTime": 0,
			"trafficReset": "never",
			"lastTrafficResetTime": 0,
			"listen": "",
			"port": 443,
			"protocol": "vless",
			"settings": {
				"clients": [
					{ "id": "{{UUID}}", "flow": "", "email": "user12@vless.com", "limitIp": 0, "totalGB": 0, "expiryTime": 0, "enable": true }
				],
				"decryption": "none",
				"encryption": "none"
			},
			"streamSettings": {
				"network": "xhttp",
				"xhttpSettings": {
					"path": "{{PATH_XHTTP}}",
					"host": "{{SUBDOMAIN_CDN}}",
					"mode": "auto",
					"xPaddingBytes": "10-500",
					"xPaddingObfsMode": false,
					"xPaddingKey": "",
					"xPaddingHeader": "",
					"xPaddingPlacement": "",
					"xPaddingMethod": "",
					"sessionPlacement": "",
					"sessionKey": "",
					"seqPlacement": "",
					"seqKey": "",
					"uplinkDataPlacement": "",
					"uplinkDataKey": "",
					"scMaxEachPostBytes": "1000000",
					"noSSEHeader": false,
					"scMaxBufferedPosts": 30,
					"scStreamUpServerSecs": "20-80",
					"serverMaxHeaderBytes": 0,
					"uplinkHTTPMethod": "",
					"headers": {},
					"scMinPostsIntervalMs": "30",
					"uplinkChunkSize": 0,
					"noGRPCHeader": false,
					"enableXmux": false
				},
				"security": "tls",
				"tlsSettings": {
					"serverName": "{{SUBDOMAIN_CDN}}",
					"minVersion": "1.2",
					"maxVersion": "1.3",
					"cipherSuites": "",
					"rejectUnknownSni": false,
					"disableSystemRoot": false,
					"enableSessionResumption": false,
					"certificates": [
						{
							"certificateFile": "{{CERT_CDN}}",
							"keyFile": "{{KEY_CDN}}",
							"oneTimeLoading": false,
							"usage": "encipherment",
							"buildChain": false
						}
					],
					"alpn": [
						"h2",
						"http/1.1"
					],
					"echServerKeys": "{{ECH_SERVER_KEYS}}",
					"settings": {
						"fingerprint": "chrome",
						"echConfigList": "{{ECH_CONFIG_LIST}}",
						"pinnedPeerCertSha256": []
					}
				},
				"externalProxy": [
					{
						"forceTls": "same",
						"dest": "{{WHITELIST_IP}}",
						"port": 443,
						"remark": "",
						"sni": "",
						"alpn": []
					}
				]
			},
			"tag": "in-443-tcp",
			"sniffing": {
				"enabled": false
			},
			"clientStats": [],
			"nodeId": null,
			"fallbackParent": null
		}
	},	
	// 13 -------------------------------------------------------------------
	{
		id: "tls_xhttp_cdn_vmess",
		name: "13. VMess xHTTP CDN",
		content: {
			"id": 17,
			"userId": 0,
			"up": 0,
			"down": 0,
			"total": 0,
			"remark": "13- tls xhttp CDN vmess",
			"enable": true,
			"expiryTime": 0,
			"trafficReset": "never",
			"lastTrafficResetTime": 0,
			"listen": "",
			"port": 2083,
			"protocol": "vmess",
			"settings": {
				"clients": [
					{ "id": "{{UUID}}", "security": "auto", "level": 0, "email": "user13@vmess.com", "limitIp": 0, "totalGB": 0, "expiryTime": 0, "enable": true }
				]
			},
			"streamSettings": {
				"network": "xhttp",
				"xhttpSettings": {
					"path": "{{PATH_XHTTP}}",
					"host": "{{SUBDOMAIN_CDN}}",
					"mode": "auto",
					"xPaddingBytes": "100-1000",
					"xPaddingObfsMode": false,
					"xPaddingKey": "",
					"xPaddingHeader": "",
					"xPaddingPlacement": "",
					"xPaddingMethod": "",
					"sessionPlacement": "",
					"sessionKey": "",
					"seqPlacement": "",
					"seqKey": "",
					"uplinkDataPlacement": "",
					"uplinkDataKey": "",
					"scMaxEachPostBytes": "1000000",
					"noSSEHeader": false,
					"scMaxBufferedPosts": 30,
					"scStreamUpServerSecs": "20-80",
					"serverMaxHeaderBytes": 0,
					"uplinkHTTPMethod": "",
					"headers": {},
					"scMinPostsIntervalMs": "30",
					"uplinkChunkSize": 0,
					"noGRPCHeader": false,
					"enableXmux": false
				},
				"security": "tls",
				"tlsSettings": {
					"serverName": "{{SUBDOMAIN_CDN}}",
					"minVersion": "1.0",
					"maxVersion": "1.3",
					"cipherSuites": "",
					"rejectUnknownSni": false,
					"disableSystemRoot": false,
					"enableSessionResumption": false,
					"certificates": [
						{
							"certificateFile": "{{CERT_CDN}}",
							"keyFile": "{{KEY_CDN}}",
							"oneTimeLoading": false,
							"usage": "encipherment",
							"buildChain": false
						}
					],
					"alpn": [
						"h2",
						"http/1.1"
					],
					"echServerKeys": "{{ECH_SERVER_KEYS}}",
					"settings": {
						"fingerprint": "chrome",
						"echConfigList": "{{ECH_CONFIG_LIST}}",
						"pinnedPeerCertSha256": []
					}
				},
				"externalProxy": [
					{
						"forceTls": "same",
						"dest": "{{WHITELIST_IP}}",
						"port": 2083,
						"remark": "",
						"sni": "",
						"alpn": []
					}
				]
			},
			"tag": "in-2083-tcp",
			"sniffing": {
				"enabled": false
			},
			"clientStats": [],
			"nodeId": null,
			"fallbackParent": null
		}
	},	
	// 14 -------------------------------------------------------------------
	{
		id: "tls_httpupgrade_cdn_vmess",
		name: "14. VMess HTTPUpgrade CDN",
		content: {
			"id": 18,
			"userId": 0,
			"up": 0,
			"down": 0,
			"total": 0,
			"remark": "14- tls httpupgrade CDN vmess",
			"enable": true,
			"expiryTime": 0,
			"trafficReset": "never",
			"lastTrafficResetTime": 0,
			"listen": "",
			"port": 2096,
			"protocol": "vmess",
			"settings": {
				"clients": [
					{ "id": "{{UUID}}", "security": "auto", "level": 0, "email": "user14@vmess.com", "limitIp": 0, "totalGB": 0, "expiryTime": 0, "enable": true }
				]
			},
			"streamSettings": {
				"network": "httpupgrade",
				"httpupgradeSettings": {
					"acceptProxyProtocol": false,
					"path": "{{PATH_UPGRADE}}",
					"host": "{{SUBDOMAIN_CDN}}",
					"headers": {}
				},
				"security": "tls",
				"tlsSettings": {
					"serverName": "{{SUBDOMAIN_CDN}}",
					"minVersion": "1.0",
					"maxVersion": "1.3",
					"cipherSuites": "",
					"rejectUnknownSni": false,
					"disableSystemRoot": false,
					"enableSessionResumption": false,
					"certificates": [
						{
							"certificateFile": "{{CERT_CDN}}",
							"keyFile": "{{KEY_CDN}}",
							"oneTimeLoading": false,
							"usage": "encipherment",
							"buildChain": false
						}
					],
					"alpn": [
						"h2",
						"http/1.1"
					],
					"echServerKeys": "{{ECH_SERVER_KEYS}}",
					"settings": {
						"fingerprint": "chrome",
						"echConfigList": "{{ECH_CONFIG_LIST}}",
						"pinnedPeerCertSha256": []
					}
				},
				"externalProxy": [
					{
						"forceTls": "same",
						"dest": "{{WHITELIST_IP}}",
						"port": 2096,
						"remark": "",
						"sni": "",
						"alpn": []
					}
				]
			},
			"tag": "in-2096-tcp",
			"sniffing": {
				"enabled": false
			},
			"clientStats": [],
			"nodeId": null,
			"fallbackParent": null
		}
	},	
	// 15 -------------------------------------------------------------------
	{
		id: "tls_ws_cdn_trojan",
		name: "15. Trojan WS CDN",
		content: {
			"id": 19,
			"userId": 0,
			"up": 0,
			"down": 0,
			"total": 0,
			"remark": "15- tls WS CDN Trojan",
			"enable": true,
			"expiryTime": 0,
			"trafficReset": "never",
			"lastTrafficResetTime": 0,
			"listen": "",
			"port": 2087,
			"protocol": "trojan",
			"settings": {
				"clients": [
					{ "password": "{{UUID}}", "email": "user15@trojan.com", "limitIp": 0, "totalGB": 0, "expiryTime": 0, "enable": true }
				]
			},
			"streamSettings": {
				"network": "ws",
				"wsSettings": {
					"acceptProxyProtocol": false,
					"path": "{{PATH_WS}}",
					"host": "{{SUBDOMAIN_CDN}}",
					"headers": {},
					"heartbeatPeriod": 0
				},
				"security": "tls",
				"tlsSettings": {
					"serverName": "{{SUBDOMAIN_CDN}}",
					"minVersion": "1.0",
					"maxVersion": "1.3",
					"cipherSuites": "",
					"rejectUnknownSni": false,
					"disableSystemRoot": false,
					"enableSessionResumption": false,
					"certificates": [
						{
							"certificateFile": "{{CERT_CDN}}",
							"keyFile": "{{KEY_CDN}}",
							"oneTimeLoading": false,
							"usage": "encipherment",
							"buildChain": false
						}
					],
					"alpn": [
						"h2",
						"http/1.1"
					],
					"echServerKeys": "{{ECH_SERVER_KEYS}}",
					"settings": {
						"fingerprint": "chrome",
						"echConfigList": "{{ECH_CONFIG_LIST}}",
						"pinnedPeerCertSha256": []
					}
				},
				"externalProxy": [
					{
						"forceTls": "same",
						"dest": "{{WHITELIST_IP}}",
						"port": 2087,
						"remark": "",
						"sni": "",
						"alpn": []
					}
				]
			},
			"tag": "in-2087-tcp",
			"sniffing": {
				"enabled": false
			},
			"clientStats": [],
			"nodeId": null,
			"fallbackParent": null
		}
	},	
	// 16 -------------------------------------------------------------------
	{
		id: "http_httpupgrade_cdn_vless",
		name: "16. VLESS HTTPUpgrade Plain CDN (No TLS)",
		content: {
			"id": 20,
			"userId": 0,
			"up": 0,
			"down": 0,
			"total": 0,
			"remark": "16- http httpupgrade CDN vless",
			"enable": true,
			"expiryTime": 0,
			"trafficReset": "never",
			"lastTrafficResetTime": 0,
			"listen": "",
			"port": 8080,
			"protocol": "vless",
			"settings": {
				"clients": [
					{ "id": "{{UUID}}", "flow": "", "email": "user16@vless.com", "limitIp": 0, "totalGB": 0, "expiryTime": 0, "enable": true }
				],
				"decryption": "none",
				"encryption": "none"
			},
			"streamSettings": {
				"network": "httpupgrade",
				"httpupgradeSettings": {
					"acceptProxyProtocol": false,
					"path": "{{PATH_UPGRADE}}",
					"host": "{{SUBDOMAIN_CDN}}",
					"headers": {}
				},
				"security": "none",
				"externalProxy": [
					{
						"forceTls": "same",
						"dest": "{{WHITELIST_IP}}",
						"port": 8080,
						"remark": "",
						"sni": "",
						"alpn": []
					}
				]
			},
			"tag": "in-8080-tcp",
			"sniffing": {
				"enabled": true,
				"destOverride": [ "http", "tls", "quic", "fakedns" ]
			},
			"clientStats": [],
			"nodeId": null,
			"fallbackParent": null
		}
	},	
	// 17 -------------------------------------------------------------------
	{
		id: "http_httpupgrade_cdn_vmess",
		name: "17. VMess HTTPUpgrade Plain CDN (No TLS)",
		content: {
			"id": 21,
			"userId": 0,
			"up": 0,
			"down": 0,
			"total": 0,
			"remark": "17- http httpupgrade CDN vmess",
			"enable": true,
			"expiryTime": 0,
			"trafficReset": "never",
			"lastTrafficResetTime": 0,
			"listen": "",
			"port": 8880,
			"protocol": "vmess",
			"settings": {
				"clients": [
					{ "id": "{{UUID}}", "security": "auto", "level": 0, "email": "user17@vmess.com", "limitIp": 0, "totalGB": 0, "expiryTime": 0, "enable": true }
				]
			},
			"streamSettings": {
				"network": "httpupgrade",
				"httpupgradeSettings": {
					"acceptProxyProtocol": false,
					"path": "{{PATH_UPGRADE}}",
					"host": "{{SUBDOMAIN_CDN}}",
					"headers": {}
				},
				"security": "none",
				"externalProxy": [
					{
						"forceTls": "same",
						"dest": "{{WHITELIST_IP}}",
						"port": 8880,
						"remark": "",
						"sni": "",
						"alpn": []
					}
				]
			},
			"tag": "in-8880-tcp",
			"sniffing": {
				"enabled": true,
				"destOverride": [ "http", "tls", "quic", "fakedns" ]
			},
			"clientStats": [],
			"nodeId": null,
			"fallbackParent": null
		}
	},	
	// 18 -------------------------------------------------------------------
	{
		id: "http_ws_cdn_vless",
		name: "18. VLESS WS Plain CDN (No TLS)",
		content: {
			"id": 22,
			"userId": 0,
			"up": 0,
			"down": 0,
			"total": 0,
			"remark": "18- http WS CDN vless",
			"enable": true,
			"expiryTime": 0,
			"trafficReset": "never",
			"lastTrafficResetTime": 0,
			"listen": "",
			"port": 2052,
			"protocol": "vless",
			"settings": {
				"clients": [
					{ "id": "{{UUID}}", "flow": "", "email": "user18@vless.com", "limitIp": 0, "totalGB": 0, "expiryTime": 0, "enable": true }
				],
				"decryption": "none",
				"encryption": "none"
			},
			"streamSettings": {
				"network": "ws",
				"wsSettings": {
					"acceptProxyProtocol": false,
					"path": "{{PATH_WS}}",
					"host": "{{SUBDOMAIN_CDN}}",
					"headers": {},
					"heartbeatPeriod": 0
				},
				"security": "none",
				"externalProxy": [
					{
						"forceTls": "same",
						"dest": "{{WHITELIST_IP}}",
						"port": 2052,
						"remark": "",
						"sni": "",
						"alpn": []
					}
				]
			},
			"tag": "in-2052-tcp",
			"sniffing": {
				"enabled": true,
				"destOverride": [ "http", "tls", "quic", "fakedns" ]
			},
			"clientStats": [],
			"nodeId": null,
			"fallbackParent": null
		}
	},	
	// 19 -------------------------------------------------------------------
	{
		id: "http_ws_cdn_vmess",
		name: "19. VMess WS Plain CDN (No TLS)",
		content: {
			"id": 23,
			"userId": 0,
			"up": 0,
			"down": 0,
			"total": 0,
			"remark": "19- http WS CDN vmess",
			"enable": true,
			"expiryTime": 0,
			"trafficReset": "never",
			"lastTrafficResetTime": 0,
			"listen": "",
			"port": 2082,
			"protocol": "vmess",
			"settings": {
				"clients": [
					{ "id": "{{UUID}}", "security": "auto", "level": 0, "email": "user19@vmess.com", "limitIp": 0, "totalGB": 0, "expiryTime": 0, "enable": true }
				]
			},
			"streamSettings": {
				"network": "ws",
				"wsSettings": {
					"acceptProxyProtocol": false,
					"path": "{{PATH_WS}}",
					"host": "{{SUBDOMAIN_CDN}}",
					"headers": {},
					"heartbeatPeriod": 0
				},
				"security": "none",
				"externalProxy": [
					{
						"forceTls": "same",
						"dest": "{{WHITELIST_IP}}",
						"port": 2082,
						"remark": "",
						"sni": "",
						"alpn": []
					}
				]
			},
			"tag": "in-2082-tcp",
			"sniffing": {
				"enabled": true,
				"destOverride": [ "http", "tls", "quic", "fakedns" ]
			},
			"clientStats": [],
			"nodeId": null,
			"fallbackParent": null
		}
	},	
	// 20 -------------------------------------------------------------------
	{
		id: "http_xhttp_cdn_vless",
		name: "20. VLESS xHTTP Plain CDN (No TLS)",
		content: {
			"id": 24,
			"userId": 0,
			"up": 0,
			"down": 0,
			"total": 0,
			"remark": "20- http xhttp CDN vless",
			"enable": true,
			"expiryTime": 0,
			"trafficReset": "never",
			"lastTrafficResetTime": 0,
			"listen": "",
			"port": 2086,
			"protocol": "vless",
			"settings": {
				"clients": [
					{ "id": "{{UUID}}", "flow": "", "email": "user20@vless.com", "limitIp": 0, "totalGB": 0, "expiryTime": 0, "enable": true }
				],
				"decryption": "none",
				"encryption": "none"
			},
			"streamSettings": {
				"network": "xhttp",
				"xhttpSettings": {
					"path": "{{PATH_XHTTP}}",
					"host": "{{SUBDOMAIN_CDN}}",
					"mode": "auto",
					"xPaddingBytes": "100-1000",
					"xPaddingObfsMode": false,
					"xPaddingKey": "",
					"xPaddingHeader": "",
					"xPaddingPlacement": "",
					"xPaddingMethod": "",
					"sessionPlacement": "",
					"sessionKey": "",
					"seqPlacement": "",
					"seqKey": "",
					"uplinkDataPlacement": "",
					"uplinkDataKey": "",
					"scMaxEachPostBytes": "1000000",
					"noSSEHeader": false,
					"scMaxBufferedPosts": 30,
					"scStreamUpServerSecs": "20-80",
					"serverMaxHeaderBytes": 0,
					"uplinkHTTPMethod": "",
					"headers": {},
					"scMinPostsIntervalMs": "30",
					"uplinkChunkSize": 0,
					"noGRPCHeader": false,
					"enableXmux": false
				},
				"security": "none",
				"externalProxy": [
					{
						"forceTls": "same",
						"dest": "{{WHITELIST_IP}}",
						"port": 2086,
						"remark": "",
						"sni": "",
						"alpn": []
					}
				]
			},
			"tag": "in-2086-tcp",
			"sniffing": {
				"enabled": true,
				"destOverride": [ "http", "tls", "quic", "fakedns" ]
			},
			"clientStats": [],
			"nodeId": null,
			"fallbackParent": null
		}
	},	
	// 21 -------------------------------------------------------------------
	{
		id: "http_xhttp_cdn_vmess",
		name: "21. VMess xHTTP Plain CDN (No TLS)",
		content: {
			"id": 25,
			"userId": 0,
			"up": 0,
			"down": 0,
			"total": 0,
			"remark": "21- http xhttp CDN vmess",
			"enable": true,
			"expiryTime": 0,
			"trafficReset": "never",
			"lastTrafficResetTime": 0,
			"listen": "",
			"port": 2095,
			"protocol": "vmess",
			"settings": {
				"clients": [
					{ "id": "{{UUID}}", "security": "auto", "level": 0, "email": "user21@vmess.com", "limitIp": 0, "totalGB": 0, "expiryTime": 0, "enable": true }
				]
			},
			"streamSettings": {
				"network": "xhttp",
				"xhttpSettings": {
					"path": "{{PATH_XHTTP}}",
					"host": "{{SUBDOMAIN_CDN}}",
					"mode": "auto",
					"xPaddingBytes": "100-1000",
					"xPaddingObfsMode": false,
					"xPaddingKey": "",
					"xPaddingHeader": "",
					"xPaddingPlacement": "",
					"xPaddingMethod": "",
					"sessionPlacement": "",
					"sessionKey": "",
					"seqPlacement": "",
					"seqKey": "",
					"uplinkDataPlacement": "",
					"uplinkDataKey": "",
					"scMaxEachPostBytes": "1000000",
					"noSSEHeader": false,
					"scMaxBufferedPosts": 30,
					"scStreamUpServerSecs": "20-80",
					"serverMaxHeaderBytes": 0,
					"uplinkHTTPMethod": "",
					"headers": {},
					"scMinPostsIntervalMs": "30",
					"uplinkChunkSize": 0,
					"noGRPCHeader": false,
					"enableXmux": false
				},
				"security": "none",
				"externalProxy": [
					{
						"forceTls": "same",
						"dest": "{{WHITELIST_IP}}",
						"port": 2095,
						"remark": "",
						"sni": "",
						"alpn": []
					}
				]
			},
			"tag": "in-2095-tcp",
			"sniffing": {
				"enabled": true,
				"destOverride": [ "http", "tls", "quic", "fakedns" ]
			},
			"clientStats": [],
			"nodeId": null,
			"fallbackParent": null
		}
	}
];