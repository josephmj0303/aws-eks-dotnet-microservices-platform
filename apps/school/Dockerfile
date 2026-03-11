FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app
RUN useradd -m appuser
COPY publish/ .
RUN mkdir -p /app/data && chown -R appuser:appuser /app
USER appuser
ENV ASPNETCORE_URLS=http://+:5001
ENV ASPNETCORE_ENVIRONMENT=Production
EXPOSE 5001
ENTRYPOINT ["dotnet", "FeesManagement.dll"]
