import { Platform } from 'react-native';

import pkg from '../package.json';
import CallsNativeModule from './libs/CallsNativeModule';
import { DirectCall } from './libs/DirectCall';
import type { DirectCallProperties, SendbirdCallsExternalSpec, User } from './types';

export default class SendbirdCallsModule extends CallsNativeModule implements SendbirdCallsExternalSpec {
  static SDK_VERSION = pkg.version;

  private _applicationId = '';
  private _initialized = false;
  private _currentUser: User | null = null;
  private _ongoingCalls: Array<DirectCallProperties> = [];

  public get applicationId() {
    return this._applicationId;
  }
  public get initialized() {
    return this._initialized;
  }
  public get currentUser() {
    return this._currentUser;
  }
  public get ongoingCallCount() {
    return this._ongoingCalls.length;
  }
  public get ongoingCalls() {
    return this._ongoingCalls;
  }

  protected getConstants = () => {
    return this.nativeModule.getConstants?.() ?? {};
  };

  public getCurrentUser = async () => {
    this._currentUser = await this.nativeModule.getCurrentUser();
    return this.currentUser;
  };

  public initialize = async (appId: string) => {
    this._applicationId = appId;
    this._initialized = await this.nativeModule.initialize(appId);
    return this.initialized;
  };
  public authenticate = async (userId: string, accessToken: string | null = null) => {
    this._currentUser = await this.nativeModule.authenticate(userId, accessToken);
    return this.currentUser as User;
  };
  public deauthenticate = async () => {
    await this.nativeModule.deauthenticate();
    this._currentUser = null;
  };
  public registerPushToken = async (token: string, unique = true) => {
    await this.nativeModule.registerPushToken(token, unique);
  };
  public unregisterPushToken = async (token: string) => {
    await this.nativeModule.unregisterPushToken(token);
  };
  public ios_voipRegistration = async () => {
    if (Platform.OS !== 'ios') return '';
    return this.nativeModule.voipRegistration();
  };
  public ios_registerVoIPPushToken = async (token: string, unique = true) => {
    if (Platform.OS !== 'ios') return;
    await this.nativeModule.registerVoIPPushToken(token, unique);
  };
  public ios_unregisterVoIPPushToken = async (token: string) => {
    if (Platform.OS !== 'ios') return;
    await this.nativeModule.unregisterVoIPPushToken(token);
  };

  public createDirectCall = (props: DirectCallProperties) => {
    return new DirectCall(this, props);
  };
}
