<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class Jwt
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        try {
            if ($request->hasCookie('access_token')) {
                $value = $request->cookie('access_token');
                $request->headers->set('Authorization', 'Bearer ' . $value);
            }
            $user = JWTAuth::parseToken()->authenticate();
        } catch (TokenExpiredException $e) {
            return response()->json([
                'message' => 'Token đã hết hạn.',
            ], 401);
        } catch (TokenInvalidException $e) {
            return response()->json([
                'message' => 'Token không hợp lệ.',
            ], 401);
        } catch (JWTException $e) {
            return response()->json([
                'message' => 'Không tìm thấy token.',
            ], 401);
        }

        return $next($request);
    }
}
