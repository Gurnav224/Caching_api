# Caching API

This API provides a simple caching mechanism with three endpoints:

- **POST /cache**: Adds a new key-value pair (or updates an existing key).
- **GET /cache/{key}**: Retrieves the value associated with the specified key.
- **DELETE /cache/{key}**: Removes the key-value pair for the specified key.

The API enforces a maximum cache size of 10 items. If the cache is full, attempting to add a new key (that does not already exist) will return an error.

## Deployed API URL

The API is deployed on Vercel and is accessible at:

https://caching-api-three.vercel.app



> **Note:** The `%20` in the URL represents a space. So the key is `"product 9"`.

## API Endpoints and Testing

### 1. POST /cache

**Description:**  
Adds a new key-value pair or updates the value if the key already exists.

**Example using cURL:**

```bash
curl -X POST https://caching-api-three.vercel.app/api/cache \
  -H "Content-Type: application/json" \
  -d '{"name": "product 9", "description": "This is a sample product description"}'

``` 

### 2. GET /cache/{key}
**Description:**
Retrieves the value associated with the given key.

Example using cURL to retrieve the key "product 9":

```bash
curl https://caching-api-three.vercel.app/api/cache/product%209
```

- A successful request returns the key and its value.
- If the key is not found, a 404 error is returned.


### 3. DELETE /cache/{key}
**Description:**
Removes the key-value pair for the specified key.

Example using cURL to delete the key "product 9":

```bash
curl -X DELETE https://caching-api-three.vercel.app/api/cache/product%209
```

- A successful deletion returns a confirmation message.
- If the key does not exist, a 404 error is returned.