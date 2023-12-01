/**
 * SendbirdError, platform-specific errors are marked as @platform
 *
 * @class SendbirdError
 * @since 1.0.0
 */
export declare class SendbirdError extends Error {
    static readonly ErrorCode: {
        readonly DIAL_CANCELED: 1800100;
        readonly MY_USER_ID_NOT_ALLOWED: 1800101;
        readonly ERR_REQUEST_FAILED: 1800200;
        readonly ERR_WEBSOCKET_CONNECTION_NOT_OPENED: 1800201;
        readonly ERR_WEBSOCKET_CONNECTION_FAILED: 1800202;
        readonly ERR_NO_RESPONSE_DUE_TO_TIMEOUT: 1800203;
        readonly ERR_REQUEST_FAILED_DUE_TO_WEBSOCKET_CONNECTION_LOST: 1800204;
        readonly ERR_WRONG_RESPONSE: 1800205;
        readonly ERR_QUERY_IN_PROGRESS: 1800206;
        readonly INTERNAL_SERVER_ERROR: 1800207;
        readonly ERR_MALFORMED_DATA: 1800208;
        readonly ERR_PARTICIPANT_ALREADY_IN_ROOM: 1800700;
        readonly ERR_ENTERING_ROOM_STILL_IN_PROGRESS: 1800701;
        readonly ERR_PARTICIPANT_NOT_IN_ROOM: 1800702;
        readonly ERR_EXITING_ROOM_STILL_IN_PROGRESS: 1800703;
        readonly ERR_FAILED_TO_ESTABLISH_CONNECTION_TO_SEND_STREAM: 1800704;
        readonly ERR_FAILED_TO_ESTABLISH_CONNECTION_TO_RECEIVE_STREAM: 1800705;
        readonly ERR_LOCAL_PARTICIPANT_LOST_CONNECTION: 1800706;
        readonly INVALID_PARAMETER_VALUE: 1800300;
        readonly INVALID_PARAMETER_TYPE: 1800301;
        readonly INSTANCE_NOT_INITIALIZED: 1800302;
        readonly USER_NOT_AUTHENTICATED: 1800303;
        readonly CAMERA_ALREADY_SWITCHING: 1800400;
        readonly ERR_CAMERA_SWITCH: 1800401;
        readonly ERR_CHANGING_AUDIO_DEVICE: 1800402;
        readonly ERR_CAPTURE_NOT_ALLOWED_ON_AUDIO_CALL: 1800600;
        readonly ERR_VIDEO_VIEW_NOT_READY: 1800601;
        readonly ERR_VIDEO_CALL_NOT_CONNECTED_YET: 1800602;
        readonly ERR_FAILED_TO_GET_IMAGE_FROM_VIDEO_STREAM: 1800603;
        readonly ERR_SERVER_INTERNAL_ERROR: 1400999;
        readonly ERR_INVALID_CALL_STATUS: 1400101;
        readonly ERR_CALL_DOES_NOT_EXIST: 1400102;
        readonly ERR_CALLEE_DOES_NOT_EXIST: 1400103;
        readonly ERR_DIAL_MYSELF: 1400104;
        readonly ERR_NO_PERMISSION: 1400105;
        readonly ERR_CALLEE_NEVER_AUTHENTICATE: 1400106;
        readonly ERR_ROOM_MAX_PARTICIPANTS: 1400120;
        readonly ERR_INVALID_ROOM_PARTICIPANT: 1400121;
        readonly ERR_CLIENT_ALREADY_ENTERED: 1400122;
        readonly ERR_SEND_ENDPOINT_CANNOT_ATTACH: 1400123;
        readonly ERR_PARTICIPANT_ALREADY_HAS_SEND_ENDPOINT: 1400124;
        readonly ERR_ROOM_DELETED: 1400126;
        readonly ERR_CALL_NOT_CONNECTED_YET: 1800610;
        readonly ERR_WRONG_RECORDING_TYPE_FOR_AUDIO_CALL: 1800611;
        readonly ERR_RECORDING_ALREADY_IN_PROGRESS: 1800612;
        readonly ERR_FAILED_TO_OPEN_FILE: 1800613;
        readonly ERR_FAILED_TO_START_RECORDING: 1800614;
        readonly ERR_FAILED_TO_STOP_RECORDING: 1800615;
        /** @platform Web **/
        readonly ERR_NOT_SUPPORTED_BROWSER_FOR_RECORDING: 1800616;
        readonly ERR_INVALID_RECORDING_TYPE: 1800617;
        /** @platform Android **/
        readonly ERR_NOT_SUPPORTED_OS_VERSION_FOR_RECORDING: 1800618;
        readonly ERR_SCREEN_SHARE_RESTRICTED_FROM_AUDIO_CALL: 1800620;
        readonly ERR_SCREEN_SHARE_REQUEST_BEFORE_CALL_IS_CONNECTED: 1800621;
        readonly ERR_SCREEN_SHARE_ALREADY_IN_PROGRESS: 1800622;
        readonly ERR_NO_SCREEN_SHARE_EXISTS: 1800623;
        /** @platform Android **/
        readonly ERR_NOT_SUPPORTED_OS_VERSION_FOR_SCREEN_SHARE: 1800624;
        /** @platform Web **/
        readonly ERR_NOT_SUPPORTED_BROWSER_FOR_SCREEN_SHARE: 1800625;
        readonly ERR_SCREEN_SHARE_FAILED_DUE_TO_UNKNOWN_REASON: 1800626;
        readonly ERR_NOT_SUPPORTED_APP_STATE_FOR_SCREEN_SHARE: 1800627;
        readonly ERR_PERMISSION_DENIED_FOR_SCREEN_SHARE: 1800628;
        readonly ERR_SELECTED_CONTENT_NOT_EXIST: 1800629;
        readonly ERR_SELECTED_CONTENT_INACCESSIBLE: 1800630;
        readonly ERR_MEDIA_STREAM_NOT_ALLOWED_ON_HOLD: 1800631;
        readonly ERR_CALL_ALREADY_ON_HOLD: 1800801;
        readonly ERR_ACTIVE_CALL_IN_PROGRESS: 1800802;
        readonly ERR_ANOTHER_CALL_IN_PROGRESS: 1800803;
    };
    readonly name = "SendbirdError";
    private readonly _code;
    constructor(message: string, code: number | string);
    get code(): number;
}