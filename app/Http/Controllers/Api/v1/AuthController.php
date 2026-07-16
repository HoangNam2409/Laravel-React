<?php

namespace App\Http\Controllers\Api\v1;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Http\Requests\AuthRequest;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Resources\UserResource;

class AuthController extends Controller
{
    public function __construct() {}

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(AuthRequest $request)
    {
        $credentials = [
            'email' => $request->input('email'),
            'password' => $request->input('password'),
        ];


        if (! $token = auth('api')->attempt($credentials)) {
            return response()->json(['error' => 'Tài khoản hoặc mật khẩu không chính xác'], Response::HTTP_UNAUTHORIZED);
        }

        $user = auth('api')->user();
        $cookie = cookie(
            'access_token',
            $token,
            auth('api')->factory()->getTTL() * 48,
            '/',
            null,
            true,
            true,
            false,
            'None',
        );

        return $this->respondWithToken($token, $user)->withCookie($cookie);
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token, $user)
    {
        return response()->json([
            'user' => new UserResource($user),
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 1
        ]);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json([
            'users' => new UserResource(auth('api')->user()),
        ]);
    }
}
