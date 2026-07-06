const result = pm.response.json();
const ifaFastChannels = result.resultObj.containers
  .filter(channel => channel.metadata.extendedMetadata?.isFast === 'Y' && channel.metadata.extendedMetadata?.adServiceConfiguration)
  .map(channel => {
    return {
      channelId: channel.metadata.channelId,
      assetIds: channel.assets.map(asset => asset.assetId)
    };
  });

const ifaDaiChannels = result.resultObj.containers
  .filter(channel => channel.metadata.extendedMetadata?.enableDAI === 'Y' && channel.metadata.extendedMetadata?.adServiceConfiguration)
  .map(channel => {
    return {
      channelId: channel.metadata.channelId,
      assetIds: channel.assets.map(asset => asset.assetId)
    };
  });

console.log(`IFA fast channels: ${JSON.stringify(ifaFastChannels)}`);
console.log(`IFA DAI channels: ${JSON.stringify(ifaDaiChannels)}`);

pm.environment.set('ifaFastChannels', ifaFastChannels);
pm.environment.set('ifaDaiChannels', ifaDaiChannels);

pm.test('Found IFA fast channel', () => {
  pm.expect(ifaFastChannels?.length).to.greaterThan(0);
});

pm.test('Found IFA DAI enabled channel', () => {
  pm.expect(ifaDaiChannels?.length).to.greaterThan(0);
});
