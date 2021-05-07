## Getting Started
dev:

```
  npm install
  nodemon app
```

### Authorization Overview: OAuth 2.0
```
     +--------+                               +---------------+
     |        |--(A)- Authorization Request ->|   Resource    |
     |        |                               |     Owner     |
     |        |<-(B)-- Authorization Grant ---|               |
     |        |                               +---------------+
     |        |
     |        |                               +---------------+
     |        |--(C)-- Authorization Grant -->| Authorization |
     | Client |                               |     Server    |
     |        |<-(D)----- Access Token -------|               |
     |        |                               +---------------+
     |        |
     |        |                               +---------------+
     |        |--(E)----- Access Token ------>|    Resource   |
     |        |                               |     Server    |
     |        |<-(F)--- Protected Resource ---|               |
     +--------+                               +---------------+
     Figure 1: Abstract Protocol flow
```

Resource Owner:
  Entity capable of granting access to a protected resource.

Resource Server:
  The server hosting the protected resource. Accepts and responds to protected resource requests using access tokens.

Client: 
  The application making the resource requests on behalf of the resource owner.

Authorization Server:
  The server that issues the access tokens after obtaining authorization.

(A) Client makes an autorization request to the Resource Owner {github, google, facebook, twitter, etc}

(B) Client receives an authorization grant, representing the Resource Owner's authorization.

(C) Client requests an access token by presenting the authorization grant. 

(D) Authorization Server authenticates the Client and, if valid, issues an access and refresh token. *refresh tokens are never sent to the resource servers. they are with Authorization Servers*

(E) In future requests for the protected resource, Client presents the access token to the Resource Server

(F) The Resource Server validates and serves the request.

```
  +--------+                                           +---------------+
  |        |--(A)------- Authorization Grant --------->|               |
  |        |                                           |               |
  |        |<-(B)----------- Access Token -------------|               |
  |        |               & Refresh Token             |               |
  |        |                                           |               |
  |        |                            +----------+   |               |
  |        |--(C)---- Access Token ---->|          |   |               |
  |        |                            |          |   |               |
  |        |<-(D)- Protected Resource --| Resource |   | Authorization |
  | Client |                            |  Server  |   |     Server    |
  |        |--(E)---- Access Token ---->|          |   |               |
  |        |                            |          |   |               |
  |        |<-(F)- Invalid Token Error -|          |   |               |
  |        |                            +----------+   |               |
  |        |                                           |               |
  |        |--(G)----------- Refresh Token ----------->|               |
  |        |                                           |               |
  |        |<-(H)----------- Access Token -------------|               |
  +--------+           & Optional Refresh Token        +---------------+
  Figure 2: Refreshing an Expired Access Token
```

cont on 2.1


source: https://tools.ietf.org/html/rfc6749

